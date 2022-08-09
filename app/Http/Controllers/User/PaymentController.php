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
            'appointment'
            ])->when($request->search, fn($query, $search) 
                => $query->whereLike('payment_tye', $search)
            )->paginate(10)->withQueryString();

        $filters = $request->only(['search']);
        return Inertia::render('Payments', compact('payments', 'filters'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

}
