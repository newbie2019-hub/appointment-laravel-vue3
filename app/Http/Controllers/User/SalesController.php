<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Payment;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SalesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $todaysAppointment = Appointment::whereDate('schedule', now())->count();
        $appointmentsIncome = Appointment::where('appointment_status', 'Finished')->whereDate('schedule', '>=', now()->subDays(7))
            ->select(DB::raw('SUM(subtotal) as subtotal'), DB::raw('DATE(schedule) as date'))
            ->groupBy('date')
            ->get();

        $payments = Payment::with([
            'appointment', 'appointment.patient'
        ])->when(
            $request->search,
            fn ($query, $search)
            => $query->whereRelation('appointment.patient', 'last_name', 'like', '%'.$search.'%')
                ->orWhereRelation('appointment.patient', 'first_name', 'like', '%'.$search.'%')
        )->paginate(10)->withQueryString();

        $chartServices = Service::withCount(['monthly_appointments'])->get(['id', 'service', 'price']);

        $appointmentsIncome = Appointment::where('appointment_status', 'Finished')->whereDate('schedule', '>=', now()->subDays(7))
        ->select(DB::raw('SUM(subtotal) as subtotal'), DB::raw('DATE(schedule) as date'))
        ->groupBy('date')
        ->get();

        $paymentsCount = Payment::count();
        $monthlyIncome = Payment::whereDate('created_at', '>=', now()->startOfMonth())->sum('total');
        $annualIncome = Payment::whereDate('created_at', '>=', now()->startOfYear())->sum('total');
        $filters = $request->only(['search', 'trashed']);

        return Inertia::render('Sales', compact('chartServices', 'todaysAppointment', 'payments', 'filters', 'appointmentsIncome', 'monthlyIncome', 'annualIncome'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
