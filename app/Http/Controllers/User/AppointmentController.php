<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Models\AppointmentService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $appointments = Appointment::with(['patient'])->when($request->trashed, fn($query, $filter) 
            => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
        )->paginate(10)->withQueryString();

        $trashedAppointmentsCount = Appointment::onlyTrashed()->count();
        /*  
        *  Filter with Query String 
        *  is needed to preserve 
        *  search and paginate 
        *  data 
        */
        $filters = $request->only(['search', 'trashed']);
        return Inertia::render('Appointments', compact('appointments', 'filters', 'trashedAppointmentsCount'));
    }
 
    public function store(AppointmentRequest $request)
    {
        $appointment = Appointment::create(
            $request->safe()->except(['selected_services']) + 
            [
                'user_id' => auth()->id(),
            ]
        );
        $this->storeSelectedServices($request->validated(), $appointment->id);
        return back()->with('success', 'Appointment has been created successfully!');
    }

    public function storeSelectedServices($data, $appointment)
    {
        // dd($data, $appointment);
        foreach($data['selected_services'] as $service){
            AppointmentService::create([
                'service_id' => $service['id'],
                'appointment_id' => $appointment
            ]);
        }
    }
}
