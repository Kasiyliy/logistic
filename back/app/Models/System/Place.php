<?php

namespace App\Models\System;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    protected $fillable = [
        'lat',
        'lng',
        'name'
    ];
}
