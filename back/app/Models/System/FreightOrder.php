<?php

namespace App\Models\System;

use App\Models\Profiles\User;
use Illuminate\Database\Eloquent\Model;

class FreightOrder extends Model
{
    protected $fillable = ['initial_place_id',
        'start_date',
        'termination_place_id',
        'finish_date',
        'distance',
        'height',
        'weight',
        'price',
        'price_for_distance',
        'description',
        'contact_information',
        'car_specific',
        'is_own',
        'status',
        'real_end_date',
        'driver_user_id',
        'car_type_id'];

    public function initialPlace()
    {
        return $this->belongsTo(Place::class, 'initial_place_id', 'id');
    }

    public function terminationPlace()
    {
        return $this->belongsTo(Place::class, 'termination_place_id', 'id');
    }

    public function driver()
    {
        return $this->belongsTo(User::class, 'driver_user_id', 'id');
    }

    public function carType()
    {
        return $this->belongsTo(CarType::class, 'car_type_id', 'id');
    }
}
