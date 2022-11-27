<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use App\Mail\PendingAccount;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterUserRequest $request)
    {

        $fileName = '';

        if ($request->hasFile('valid_id')) {
            $fileName = 'valid_id' . time() . '.' . $request->valid_id->extension();
            $request->file('valid_id')->move(public_path('images'), $fileName);
        }

        $user = User::create($request->safe()->except(['valid_id']) + ['valid_id' => $fileName]);


        Mail::to($user->email)->send(new PendingAccount($user));

        event(new Registered($user));

        return redirect('/login');
    }
}
