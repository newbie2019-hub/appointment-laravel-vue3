<?php

use App\Http\Controllers\DentalCertificateController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\User\InventoryController;
use App\Http\Controllers\User\AppointmentController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\InquiryController;
use App\Http\Controllers\User\PatientController;
use App\Http\Controllers\User\PaymentController;
use App\Http\Controllers\User\ServiceController;
use App\Http\Controllers\User\SettingsController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\User\SalesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [HomeController::class, 'index']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/generate/prescription/{appointment}', [PrescriptionController::class, 'generate'])->name('prescription.generate');
    Route::apiResource('/prescription', PrescriptionController::class)->only(['index', 'store']);

    Route::apiResource('/sales', SalesController::class);

    Route::put('/appointments/restore/{appointment}', [AppointmentController::class, 'restore'])->withTrashed();
    Route::put('/appointments/finished/{appointment}', [AppointmentController::class, 'finished']);
    Route::put('/appointments/approve/{appointment}', [AppointmentController::class, 'approve']);
    Route::put('/appointments/decline/{appointment}', [AppointmentController::class, 'decline']);
    Route::apiResource('/appointments', AppointmentController::class);
    Route::get('/search-patients', [AppointmentController::class, 'search']);

    Route::put('/services/restore/{service}', [ServiceController::class, 'restore'])->withTrashed();
    Route::apiResource('/services', ServiceController::class);

    Route::put('/patients/restore/{user}', [PatientController::class, 'restore'])->withTrashed();
    Route::apiResource('/patients', PatientController::class);

    Route::post('/payment-branch', [PaymentController::class, 'branchPayment'])->name('payment-branch.store');
    Route::post('/payment', [PaymentController::class, 'store'])->name('payment.store');

    Route::get('/certificate/{appointment}', [DentalCertificateController::class, 'index'])->name('certificate.generate');

    Route::get('/invoice/{appointment}', [PaymentController::class, 'generateInvoice'])->name('invoice.generate');
    Route::apiResource('/inquiries', InquiryController::class)->only(['index', 'store', 'destroy']);
    Route::apiResource('/payments', PaymentController::class);

    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');

    Route::put('/inventory/restore/{inventory}', [InventoryController::class, 'restore'])->withTrashed();
    Route::apiResource('/inventory', InventoryController::class);

    Route::post('/settings/update', [SettingsController::class, 'update'])->name('settings.update');
    Route::post('/settings/update-password', [SettingsController::class, 'updatePassword'])->name('settings.update-password');
});


require __DIR__.'/auth.php';
