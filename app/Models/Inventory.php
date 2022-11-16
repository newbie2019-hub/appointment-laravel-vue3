<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inventory extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('F j, Y h:i A');
    }
}
