<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 19.05.2020
 * Time: 02:30
 */

namespace App\Http\Requests\Api\V1\System;


use App\Http\Requests\Api\ApiBaseRequest;

class CreateUserApiRequest extends ApiBaseRequest
{
    public function injectedRules()
    {
        return [
            'email' => ['required', 'email', 'unique:users,email'],
            'role_id' => ['required', 'exists:roles,id'],
            'phone' => ['required'],
            'password' => ['required'],
            'name' => ['required'],
        ];
    }

}