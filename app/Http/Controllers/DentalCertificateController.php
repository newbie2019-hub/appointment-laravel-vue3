<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;

class DentalCertificateController extends Controller
{
    public function index(Appointment $appointment) 
    {
        $appointment->load(['patient', 'services', 'services.service']);

        // dd($appointment);
        $data = [
            'name' => $appointment->patient->first_name . ' ' . $appointment->patient->last_name,
            'date' => $appointment->created_at->format('Y-m-d h:i A'),
            'age' => Carbon::parse($appointment->patient->birthday)->age,
            'address' => $appointment->patient->address,
            'services' => $appointment->services
        ];
        $certificate = Pdf::loadView('pdf.certificate', $data);
        return $certificate->stream();
    }
}
