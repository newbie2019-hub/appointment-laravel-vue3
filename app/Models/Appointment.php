<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function patient()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function services()
    {
        return $this->hasMany(AppointmentService::class, 'appointment_id', 'id')->withTrashed();
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d h:i A');
    }

    public function payment()
    {
        return $this->hasOne(Payment::class, 'appointment_id', 'id');
    }

    public function prescription()
    {
        return $this->hasMany(Prescription::class, 'appointment_id', 'id');
    }

    protected $casts = [
        'schedule' => 'datetime',
    ];
}
