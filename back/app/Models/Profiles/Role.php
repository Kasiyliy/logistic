<?php

namespace App\Models\Profiles;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public const ADMIN_ID = 1;
    public const TEACHER_ID = 2;
    public const STUDENT_ID = 3;

    protected $fillable = [
        'name',
        'email'
    ];
}
