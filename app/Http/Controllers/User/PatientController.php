<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\PatientUpdateRequest;
use App\Mail\ApprovedAccount;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function approve(User $user)
    {
        $user->update(['is_approved' => true]);
        Mail::to($user->email)->send(new ApprovedAccount($user));
        return back()->with('success', 'Account has been approved successfully!');
    }

    public function index(Request $request)
    {
        $patients = User::notAdmin()->with(['medical_record'])->when(
            $request->search,
            fn ($query)
            => $query->whereLike('first_name', $request->search)
                ->orWhereLike('middle_name', $request->search)
                ->orWhereLike('last_name', $request->search)
                ->orWhereLike('email', $request->search)
        )->when(
            $request->trashed,
            fn ($query, $filter)
            => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
        )->latest()->paginate(10)->withQueryString();

        $filters = $request->only(['search', 'trashed']);
        $trashedPatientsCount = User::notAdmin()->onlyTrashed()->count();

        return Inertia::render('Patients', compact(['patients', 'trashedPatientsCount', 'filters']));
    }


    public function update(User $user, PatientUpdateRequest $request)
    {
        $user->update($request->validated());
        return back()->with('message', 'Patient record has been updated successfully!!');
    }

    public function show(User $user, Request $request)
    {
        $filters = $request->only(['search', 'trashed']);
        $trashedPatientsCount = User::notAdmin()->onlyTrashed()->count();

        $user->load(['appointments' => function($query) use($request){
            $query->when($request->trashed, fn($query, $filter)
            => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed());
        }, 'appointments.patient', 'appointments.services.service', 'appointments.prescription', 'appointments.payments', 'medical_record']);
        return Inertia::render('ViewUsers', compact(['user', 'filters']));
    }

    public function destroy(User $user)
    {
        $user->delete();
        return back()->with('message', 'Patient record has been moved to trash');
    }

    public function restore(User $user)
    {
        $user->restore();
        return back()->with('success', 'Account has been restored successfully!');
    }
}
