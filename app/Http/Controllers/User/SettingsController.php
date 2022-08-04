<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdatePasswordRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $user = auth()->user();
       return Inertia::render('Settings', compact('user'));
    }

    public function store(Request $request)
    {
        //
    }

 
    public function update(UserRequest $request)
    {
        if ($request->hasFile('image')) {
            $fileName = 'image'.time().'.'.$request->image->extension();
            auth()->user()->update(['image' => $fileName]);
            $request->file('image')->move(public_path('images/profile'), $fileName);
        }

        auth()->user()->update($request->validated());

        return back()->with('success', 'Account Information updated successfully!');
    }

    public function updatePassword(UpdatePasswordRequest $request)
    {
        auth()->user()->update(['password' => $request->password]);
        return back()->with('success', 'Account Information updated successfully!');
    }

}
