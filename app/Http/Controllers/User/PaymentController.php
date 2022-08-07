<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
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
    public function index()
    {
     return Inertia::render('Payments');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::findOrFail($request->patient['id']);
        try {
            $payment = $user->charge(
                $request->subtotal * 100,
                $request->paymentMethodId,
                [
                    'currency' => 'PHP',
                    'description' => 'Payment for a dental appointment'
                ]
            );

            return $payment;
        } catch(\Exception $e) {
            return back()->withErrors(['message' => $e->getMessage()]);
        }
    }

}
