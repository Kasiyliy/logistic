<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 19.05.2020
 * Time: 02:30
 */

namespace App\Http\Controllers\Api\V1\System;


use App\Http\Controllers\ApiBaseController;
use App\Http\Requests\Api\V1\System\CreateUserApiRequest;
use App\Models\Profiles\User;

class UserController extends ApiBaseController
{
    public function createUser(CreateUserApiRequest $request)
    {
        $user = new User();
        $user->fill($request->all());
        $user->password = bcrypt($user->password);
        $user->save();
        return $user;
    }


    public function getUsersByRole($id)
    {
        return User::with('role')->where('role_id', $id)->get();
    }

    public function getUserByEmail($email)
    {
        return User::where('email', $email)->first();
    }
}