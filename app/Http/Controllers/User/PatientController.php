<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{

    public function index(Request $request)
    {
        $patients = User::notAdmin()->when($request->search, fn($query) 
                => $query->whereLike('first_name', $request->search)
                ->orWhereLike('last_name', $request->search)
                ->orWhereLike('email', $request->search)
            )->when($request->trashed, fn($query, $filter) 
                => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
            )->paginate(10)->withQueryString();

        $filters = $request->only(['search', 'trashed']);
        $trashedPatientsCount = User::notAdmin()->onlyTrashed()->count();

        return Inertia::render('Patients', compact(['patients', 'trashedPatientsCount', 'filters']));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy(User $user)
    {
        $user->delete();
        return back()->with('message', 'Patient record has been moved to trash');
    }
}
