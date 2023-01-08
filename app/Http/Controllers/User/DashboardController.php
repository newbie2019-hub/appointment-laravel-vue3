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

        $dateFrom = null;
        $dateTo = null;
        $apptFrom = null || now()->subDays(7);
        $apptTo = null;

        if (is_array($request->summaryDate)) {
            $dateFrom = $request->summaryDate[0];
            $dateTo = $request->summaryDate[1];
        }

        if (is_array($request->appointmentDate)) {
            $apptFrom = $request->appointmentDate[0];
            $apptTo = $request->appointmentDate[1];
        }

        if (auth()->user()->is_admin) {
            $appointments = Appointment::with([
                'patient:id,first_name,last_name,email,gender',
                'services.service'
            ])->when(
                $request->search,
                fn ($query, $search)
                => $query->whereRelation('patient', 'email', 'like', '%' . $search . '%')
                    ->orWhereRelation('patient', 'first_name', 'like', '%' . $search . '%')
                    ->orWhereRelation('patient', 'last_name', 'like', '%' . $search . '%')
            )->when(
                $request->trashed,
                fn ($query, $filter)
                => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
            )->latest()->take(10)->get();
        } else {
            $appointments = Appointment::where('user_id', auth()->id())->with([
                'patient:id,first_name,last_name,email,gender',
                'services.service'
            ])->when(
                $request->trashed,
                fn ($query, $filter)
                => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
            )->latest()->take(10)->get();
        }

        $appointmentsIncome = Appointment::where('appointment_status', 'Finished')->whereDate('schedule', '>=', $apptFrom)
            ->when($apptTo, fn($query, $date) => $query->whereDate('schedule', '>=', $date))
            ->select(DB::raw('SUM(subtotal) as subtotal'), DB::raw('DATE(schedule) as date'))
            ->groupBy('date')
            ->get();

        $chartServices = Service::withCount(['monthly_appointments'])
            ->when($dateFrom, fn ($query, $date)
            => $query->whereRelation('monthly_appointments', 'created_at', '>=', $date))
            ->when($dateTo, fn ($query, $date)
            => $query->whereRelation('monthly_appointments', 'created_at', '<=', $date))
            ->get(['id', 'service', 'price']);

        $filters = $request->only(['search', 'trashed', 'summaryDate', 'appointmentDate']);
        return Inertia::render('Dashboard', compact([
            'appointmentsIncome',
            'chartServices',
            'filters',
            'totalInquiries',
            'patientsCount',
            'todaysAppointment',
            'servicesCount',
            'appointments'
        ]));
    }
}
