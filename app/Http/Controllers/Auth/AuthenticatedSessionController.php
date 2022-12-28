<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Mail\ApprovedAccount;
use App\Mail\DeclinedAccount;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    public function decline(User $user)
    {
        $user->update(['is_approved' => false]);
        $user->update(['is_declined' => true]);
        Mail::to($user->email)->send(new DeclinedAccount($user));
        return back()->with('success', 'Account has been declined!');
    }

    public function approve(User $user)
    {
        $user->update(['is_approved' => true]);
        $user->update(['is_declined' => false]);
        Mail::to($user->email)->send(new ApprovedAccount($user));
        return back()->with('success', 'Account has been approved successfully!');
    }

    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
