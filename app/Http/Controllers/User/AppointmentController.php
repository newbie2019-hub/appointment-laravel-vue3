<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Mail\AppointmentApproved;
use App\Models\Appointment;
use App\Models\AppointmentService;
use App\Models\Service;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $services = Service::get();
        $users = [];

        if(auth()->user()->is_admin) {
            $appointments = Appointment::with(['patient:id,first_name,last_name,email,gender,address','services.service','payments:id,appointment_id,receipt_url,payment_type,created_at','prescription'])
            ->withCount('prescription')
            ->when($request->search, fn($query, $search) =>
                $query->whereRelation('patient', 'first_name', 'like', '%'.$search.'%')
                ->orWhereRelation('patient', 'last_name', 'like', '%'.$search.'%')
            )->when($request->trashed, function($query) use($request){
                if($request->trashed === 'pending') {
                    $query->where('appointment_status', 'Pending');
                } else if($request->trashed === 'finished') {
                    $query->where('appointment_status', 'Finished');
                } else if($request->trashed === 'approved') {
                    $query->where('appointment_status', 'Approved');
                } else if($request->trashed === 'only') {
                    $query->onlyTrashed();
                } else {
                    $query->withTrashed();
                }
            })->latest()->paginate(10)->withQueryString();

            $trashedAppointmentsCount = Appointment::onlyTrashed()->count();
            $todaysAppointment = Appointment::whereDate('schedule', now())->count();
            $users = $this->search($request);
        }
        else {
            $appointments = Appointment::where('user_id', auth()->id())->with(['patient:id,first_name,last_name,address,email,gender','services.service','payments:id,appointment_id,receipt_url,payment_type,created_at','prescription'])->withCount('prescription')->when($request->search, fn($query, $search) =>
                $query->whereRelation('patient', 'first_name', 'like', '%'.$search.'%')
                ->orWhereRelation('patient', 'last_name', 'like', '%'.$search.'%')
            )->when($request->trashed, fn($query, $filter)
                => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
            )->latest()->paginate(10)->withQueryString();

            $trashedAppointmentsCount = Appointment::onlyTrashed()->where('user_id', auth()->id())->count();
            $todaysAppointment = Appointment::whereDate('schedule', now())->where('user_id', auth()->id())->count();
        }
        /*
        *  Filter with Query String
        *  is needed to preserve
        *  search and paginate
        *  data
        */
        $filters = $request->only(['search', 'trashed']);
        return Inertia::render('Appointments', compact('users', 'services', 'appointments', 'filters', 'trashedAppointmentsCount', 'todaysAppointment'));
    }

    public function store(AppointmentRequest $request)
    {
        if(auth()->user()->is_admin == 1 && ($request->user_id == null || $request->user_id == '')){
            return back()->withErrors(['error' => 'Current signed-in account is admin']);
        }
        if($this->isAppointmentAvailable($request)){
            $appointment = Appointment::create(
                $request->safe()->except(['selected_services', 'healthFormData', 'schedule']) +
                [
                    'user_id' => auth()->id(),
                    'schedule' => $request->fixed_schedule,
                    'q1' => $request->healthFormData["q1"],
                    'q2' => $request->healthFormData["q2"],
                    'q3' => $request->healthFormData["q3"],
                    'q4' => $request->healthFormData["q4"],
                    'q5' => $request->healthFormData["q5"],
                ]
            );

            $this->storeSelectedServices($request->validated(), $appointment->id);
            return back()->with('success', 'Appointment has been created successfully!');
        } else {
            return back()->withErrors(['error' => 'Selected schedule is unavailable.']);
        }

    }

    public function update(Appointment $appointment, AppointmentRequest $request)
    {
        if(auth()->user()->is_admin == 1 && ($request->user_id == null || $request->user_id == '')){
            return back()->withErrors(['error' => 'Current signed-in account is admin']);
        }

        $appointment->update($request->safe()->except(['selected_services']));
        $this->storeSelectedServices($request->validated(), $appointment->id);
        return back()->with('success', 'Appointment has been created successfully!');

    }


    public function search($request)
    {
        return User::notAdmin()->when($request->search, fn($query, $search)
            => $query->whereLike('first_name', $search)
            ->orWhereLike('last_name', $request->search)
            ->orWhereLike('email', $request->search)
        )->limit(10)->get(['id','first_name','last_name','email']);
    }

    public function storeSelectedServices($data, $appointment)
    {
        AppointmentService::where('appointment_id', $appointment)->forceDelete();
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
        if($appointment->appointment_status != 'Approved' && $appointment->appointment_status != 'Finished'){
            $appointment->update([
                'appointment_status' => 'Cancelled'
            ]);
        }

        $appointment->delete();
        return back()->with('success', 'Appointment has been trashed successfully!');
    }

    public function approve(Appointment $appointment)
    {
        $appointment->load(['patient']);
        $appointment->update([
            'appointment_status' => 'Approved'
        ]);
        Mail::to($appointment->patient->email)->send(new AppointmentApproved($appointment));
        return back()->with('success', 'Appointment has been approved successfully!');
    }

    public function finished(Appointment $appointment)
    {
        $appointment->update([
            'appointment_status' => 'Finished'
        ]);
        return back()->with('success', 'Appointment has marked as finished!');
    }

    public function restore(Appointment $appointment)
    {
        $appointment->restore();
        return back()->with('success', 'Appointment has been restored successfully!');
    }
}
