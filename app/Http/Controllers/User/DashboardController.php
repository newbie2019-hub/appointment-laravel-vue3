<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Inquiry;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
   public function index(Request $request)
   {
      $totalInquiries = Inquiry::count();
      $patientsCount = User::notAdmin()->count();
      $servicesCount = Service::count();
      $todaysAppointment = Appointment::whereDate('schedule', now())->count();
      $appointments = [];

      if(auth()->user()->is_admin) {
         $appointments = Appointment::with([
            'patient:id,first_name,last_name,email,gender',
            'services.service'
            ])->when($request->search, fn($query, $search)
               => $query->whereRelation('patient', 'email', 'like', '%'.$search.'%')
               ->orWhereRelation('patient', 'first_name', 'like', '%'.$search.'%')
               ->orWhereRelation('patient', 'last_name', 'like', '%'.$search.'%')
            )->when($request->trashed, fn($query, $filter)
                  => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
            )->latest()->take(10)->get();
      }
      else {
         $appointments = Appointment::where('user_id', auth()->id())->with([
            'patient:id,first_name,last_name,email,gender',
            'services.service'
            ])->when($request->trashed, fn($query, $filter)
                  => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
            )->latest()->take(10)->get();
      }

      $appointmentsIncome = Appointment::where('appointment_status', 'Finished')->whereDate('schedule', '>=', now()->subDays(7))
      ->select(DB::raw('SUM(subtotal) as subtotal'), DB::raw('DATE(schedule) as date'))
      ->groupBy('date')
      ->get();

      $chartServices = Service::withCount(['monthly_appointments'])->get(['id','service','price']);

      $filters = $request->only(['search', 'trashed']);
      return Inertia::render('Dashboard', compact(['appointmentsIncome', 'chartServices', 'filters', 'totalInquiries','patientsCount','todaysAppointment','servicesCount', 'appointments']));
   }
}
