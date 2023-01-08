<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $appointments = [];
        $appointments = Appointment::where('appointment_status', '<>', 'Cancelled')
            ->where('appointment_status', '<>', 'Declined')->where('schedule', '>=', Carbon::now()->addDay()->format('Y-m-d H:i'))->get(['id', 'schedule']);

        $services = Service::get();
        return inertia('Welcome', compact('services', 'appointments'));
    }
}
