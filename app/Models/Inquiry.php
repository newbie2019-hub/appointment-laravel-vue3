<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    use HasFactory;
    protected $guarded = [];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d h:i A');
    }
}
