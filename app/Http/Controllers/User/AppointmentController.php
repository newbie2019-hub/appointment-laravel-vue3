<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Models\AppointmentService;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $appointments = Appointment::with(['patient:id,first_name,last_name,email,gender','services.service'])->when($request->search, fn($query, $search) =>
            $query->whereRelation('patient', 'first_name', 'like', '%'.$search.'%')
            ->orWhereRelation('patient', 'last_name', 'like', '%'.$search.'%')
        )->when($request->trashed, fn($query, $filter) 
            => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
        )->paginate(10)->withQueryString();

        $trashedAppointmentsCount = Appointment::onlyTrashed()->count();
        $services = Service::get();
        $todaysAppointment = Appointment::whereDate('schedule', now())->count();
        
        /*  
        *  Filter with Query String 
        *  is needed to preserve 
        *  search and paginate 
        *  data 
        */
        $filters = $request->only(['search', 'trashed']);
        return Inertia::render('Appointments', compact('services', 'appointments', 'filters', 'trashedAppointmentsCount', 'todaysAppointment'));
    }
 
    public function store(AppointmentRequest $request)
    {
        if(auth()->user()->is_admin == 1){
            return back()->withErrors(['error' => 'Current signed-in account is admin']);
        }

        if($this->isAppointmentAvailable($request)){
            $appointment = Appointment::create(
                $request->safe()->except(['selected_services']) + 
                [
                    'user_id' => auth()->id(),
                ]
            );
    
            $this->storeSelectedServices($request->validated(), $appointment->id);
            return back()->with('success', 'Appointment has been created successfully!');
        } else {
            return back()->withErrors(['error' => 'Selected schedule is unavailable.']);
        }
       
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

    protected function isAppointmentAvailable($data)
    {
        $doesExist = Appointment::where(fn($query) =>
            $query->where('appointment_status', '<>', 'Finished')
            ->where('appointment_status', '<>', 'Cancelled')
         )->where('schedule', '>=', Carbon::parse($data['schedule'])->startOfHour()->format('Y-m-d H:i'))
        ->where('schedule', '<=', Carbon::parse($data['schedule'])->addHour()->format('Y-m-d H:i'))
        ->get();
        
        return $doesExist->isEmpty();
    }

    protected function isUserAdmin()
    {
        return auth()->user()->is_admin == 1;
    }

    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return back()->with('success', 'Appointment has been trashed successfully!');
    }

    public function approve(Appointment $appointment)
    {
        $appointment->update([
            'appointment_status' => 'Approved'
        ]);
        return back()->with('success', 'Appointment has been approved successfully!');
    }

    public function restore(Appointment $appointment)
    {
        $appointment->restore();
        return back()->with('success', 'Appointment has been restored successfully!');
    }
}
