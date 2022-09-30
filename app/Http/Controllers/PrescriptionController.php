<?php

namespace App\Http\Controllers;

use App\Http\Requests\PrescriptionRequest;
use App\Models\Appointment;
use App\Models\Prescription;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{

    public function store(PrescriptionRequest $request)
    {
        Prescription::updateOrCreate(['appointment_id' => $request->appointment_id], $request->validated());
        return back()->with(['success', 'Prescription has been saved successfully!']);
    }

    public function generate(Appointment $appointment)
    {
        $appointment->load(['patient', 'prescription']);

        $data = [
            'name' => $appointment->patient->first_name . ' ' . $appointment->patient->last_name,
            'date' => $appointment->created_at->format('Y-m-d h:i A'),
            'age' => Carbon::parse($appointment->patient->birthday)->age,
            'address' => $appointment->patient->address,
            'prescription' => $appointment->prescription
        ];

        $certificate = Pdf::loadView('pdf.prescription', $data);
        return $certificate->stream();
    }

    public function destroy($id)
    {
        //
    }
}
