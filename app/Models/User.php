<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Cashier\Billable;
use App\Enums\AccountStatus;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes, Billable;

    protected $appends = ['full_name'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'image',
        'first_name',
        'middle_name',
        'last_name',
        'gender',
        'contact_number',
        'birthday',
        'address',
        'email',
        'is_approved',
        'is_declined',
        'password',
        'valid_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'user_id', 'id');
    }

    public function medical_record()
    {
        return $this->hasOne(MedicalRecord::class, 'user_id', 'id');
    }

    public function scopeNotAdmin($query)
    {
        return $query->where('is_admin', '<>', 1);
    }

    public function getFullNameAttribute()
    {
        return $this->last_name . ', ' . $this->first_name;
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        // return $date->format('Y-m-d h:i A');
        return $date->format('d-M-Y h:i A');
    }

    protected function password(): Attribute
    {
        return Attribute::make(
            set: fn($value) => Hash::make($value)
        );
    }

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_approved' => AccountStatus::class
    ];
}
