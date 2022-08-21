<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class DentalCertificateController extends Controller
{
    public function index(Appointment $appointment) 
    {
        $data = [];
        $certificate = Pdf::loadView('pdf.certificate', $data);
        return $certificate->stream();
    }
}
