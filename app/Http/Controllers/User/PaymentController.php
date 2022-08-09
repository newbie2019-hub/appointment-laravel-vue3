<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Payment;
use App\Models\User;
use Error;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        Payment::create([
            'total' => $request->subtotal,
            'amount_tendered' => $request->amount_tendered,
            'appointment_id' => $request->appointment_id,
            'payment_type' => 'On-Branch',
            'change' => $request->change,
            'receipt_url' => 'N/A'
        ]);

        $appointment = Appointment::where('id', $request->appointment_id)->first();

        $appointment->update([
            'payment_status' => 'Paid'
        ]);
        
        return back()->with('message', 'Payment transaction is successful!');
    }

}
