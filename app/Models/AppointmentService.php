<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AppointmentService extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id', 'id')->withTrashed();
    }
}
