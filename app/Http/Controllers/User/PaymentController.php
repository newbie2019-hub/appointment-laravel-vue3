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
            ])->when($request->search, fn($query, $search)
                => $query->whereLike('payment_tye', $search)
            )->paginate(10)->withQueryString();

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
        } catch(\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function branchPayment(Request $request)
    {
        $payment = Payment::create([
            'addons_note' => $request->addons_note,
            'addons_amount' => $request->addons_amount,
            'amount_tendered' => $request->amount_tendered,
            'sub_total' => $request->subtotal,
            'total' => $request->subtotal + $request->addons_amount,
            'change' => $request->change,
            'appointment_id' => $request->appointment_id,
            'payment_type' => 'On-Branch',
            'receipt_url' => 'N/A'
        ]);

        $appointment = Appointment::where('id', $request->appointment_id)->first();

        $appointment->update([
            'payment_status' => 'Paid'
        ]);

        return back()->with('message', 'Payment transaction is successful!');
    }

    public function generateInvoice(Request $request, $id)
    {
        $appointment = Appointment::with(['services.service:id,service,price', 'patient'])->where('id', $id)->first();
        $payment = Payment::where('appointment_id', $id)->first();

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
        foreach($appointment->services as $service) {
            $items[] = (new InvoiceItem())->title($service->service->service)->pricePerUnit($service->service->price);
        }

        if($payment->addons_note){
            $items[] = (new InvoiceItem())->title($payment->addons_note)->pricePerUnit($payment->addons_amount);
        }

        $notes = [
            'Thank you for choosing our service.',
            'Have a nice day ahead!',
        ];

        $notes = implode("<br>", $notes);

        $invoice = ExtendedInvoice::make('receipt')
            ->buyer($customer)
            ->status(__('invoices::invoice.paid'))
            ->date($payment->created_at)
            ->dateFormat('Y/m/d h:i A')
            ->seller($owner)
            ->currencySymbol('₱')
            ->currencyCode('PHP')
            ->filename($appointment->patient->last_name . '_' . $appointment->patient->first_name)
            ->addItems($items)
            ->notes($notes)
            ->currencyFormat('{SYMBOL}{VALUE}')
            ->amountReceived($payment->amount_tendered);
            // ->save('public');

        // $link = $invoice->url();
        return $invoice->stream();
    }

}
