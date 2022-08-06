<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('d-M-Y h:i A');
    }

    public function monthly_appointments()
    {
        return $this->hasMany(AppointmentService::class, 'service_id', 'id')->whereDate('created_at', '>=', now()->startOfMonth());
    }
}
