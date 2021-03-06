<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 19.05.2020
 * Time: 02:09
 */

namespace App\Http\Controllers\Api\V1\System;


use App\Http\Controllers\ApiBaseController;
use App\Models\Profiles\Role;
use App\Models\System\CarType;

class SystemController extends ApiBaseController
{

    public function getRoles()
    {
        return Role::all();
    }

    public function getCarTypes()
    {
        return CarType::all();
    }

}