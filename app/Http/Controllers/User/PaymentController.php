<?php

namespace App\Http\Controllers\User;

use App\Extensions\ExtendedInvoice;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Payment;
use App\Models\User;
use Error;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use LaravelDaily\Invoices\Classes\Buyer;
use LaravelDaily\Invoices\Classes\InvoiceItem;
use LaravelDaily\Invoices\Classes\Party;
use LaravelDaily\Invoices\Invoice;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $payments = Payment::with([
            'appointment', 'appointment.patient'
        ])->when(
            $request->search,
            fn ($query, $search)
            => $query->whereRelation('appointment.patient', 'last_name', 'like', '%' . $search . '%')
                ->orWhereRelation('appointment.patient', 'first_name', 'like', '%' . $search . '%')
        )->latest()->paginate(10)->withQueryString();

        $paymentsCount = Payment::count();
        $monthlyPaymentsCount = Payment::whereDate('created_at', '>=', now()->startOfMonth())->count();

        $filters = $request->only(['search']);
        return Inertia::render('Payments', compact('payments', 'filters', 'paymentsCount', 'monthlyPaymentsCount'));
    }


    public function store(Request $request)
    {
        $user = User::where('id', $request->patient['id'])->first();

        try {
            $payment = $user->charge(
                $request->subtotal * 100,
                $request->paymentMethodId,
                [
                    'currency' => 'PHP',
                    'description' => 'Payment for a dental appointment'
                ]
            );

            Payment::create([
                'total' => $request->subtotal,
                'amount_tendered' => null,
                'appointment_id' => $request->id,
                'payment_type' => 'Stripe',
                'change' => null,
                'receipt_url' => $payment->charges->data[0]['receipt_url']
            ]);

            $appointment = Appointment::where('id', $request->id)->first();

            $appointment->update([
                'payment_status' => 'Paid'
            ]);

            return back()->with('message', 'Payment transaction is successful!');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function branchPayment(Request $request)
    {
        Payment::create([
            'addons_note' => $request->addons_note,
            'addons_amount' => $request->addons_amount,
            'amount_tendered' => $request->amount_tendered,
            'sub_total' => $request->subtotal,
            'total' => $request->subtotal + $request->addons_amount,
            'change' => $request->is_installment ? 0 : $request->change,
            'appointment_id' => $request->appointment_id,
            'payment_type' => 'On-Branch',
            'is_installment' => $request->is_installment,
            'receipt_url' => 'N/A'
        ]);

        $appointment = Appointment::withSum('payments', 'amount_tendered')->where('id', $request->appointment_id)->first();

        $isPaid = $appointment->payments_sum_amount_tendered >= $appointment->subtotal ? true : false;

        $appointment->update([
            'subtotal' => $request->addons_amount + $appointment->subtotal,
            'payment_status' => $isPaid ? 'Paid' : 'Partially-Paid'
        ]);

        return back()->with('message', 'Payment transaction is successful!');
    }

    public function generateInvoice(Request $request, $id)
    {
        $payment = Payment::where('id', $id)->first();
        $appointment = Appointment::with(['services.service:id,service,price', 'patient', 'payments'])->where('id', $id)->first();

        $owner = User::where('id', 1)->first();

        $owner = new Party([
            'name'          => $owner->full_name,
            'phone'         => $owner->contact_number,
            'custom_fields' => [
                'business id' => '#123DEMO',
            ],
        ]);

        $customer = new Buyer([
            'name'          => $appointment->patient->full_name,
            'custom_fields' => [
                'email' => $appointment->patient->email,
                'contact' => $appointment->patient->contact_number
            ],
        ]);

        $items = [];
        foreach ($appointment->services as $service) {
            $items[] = (new InvoiceItem())->title($service->service->service)->pricePerUnit($service->service->price);
        }

        $amount_tendered = 0;
        foreach ($appointment->payments as $payment) {
            if ($payment->addons_amount > 0) {
                $items[] = (new InvoiceItem())->title('Additional')->pricePerUnit($payment->addons_amount);
            }

            $amount_tendered = $amount_tendered + $payment->amount_tendered;
            // $items[] = (new InvoiceItem())->title('Payment')->pricePerUnit($payment->amount_tendered);

        }

        $notes = [
            'Thank you for choosing our service.',
            'Have a nice day ahead!',
        ];

        $notes = implode("<br>", $notes);

        $invoice = ExtendedInvoice::make('receipt')
            ->buyer($customer)
            ->date(now())
            ->dateFormat('Y/m/d h:i A')
            ->seller($owner)
            ->currencySymbol('₱')
            ->currencyCode('PHP')
            ->filename($appointment->patient->last_name . '_' . $appointment->patient->first_name)
            ->addItems($items)
            ->notes($notes)
            ->currencyFormat('{SYMBOL}{VALUE}')
            ->amountReceived($amount_tendered);
        // ->save('public');

        // $link = $invoice->url();
        return $invoice->stream();
    }
}
