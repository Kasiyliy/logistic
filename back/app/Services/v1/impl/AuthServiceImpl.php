<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 21.01.2020
 * Time: 20:42
 */

namespace App\Services\v1\impl;


use App\Exceptions\ApiServiceException;
use App\Http\Errors\ErrorCode;
use App\Http\Utils\ApiUtil;
use App\Models\Profiles\Role;
use App\Models\Profiles\User;
use App\Services\v1\AuthService;
use Illuminate\Support\Facades\Hash;
use JWTAuth;

class AuthServiceImpl implements AuthService
{
    public function login($email, $password)
    {
        $user = User::where('email', $email)->first();
        if ($user && Hash::check($password, $user->password)) {
            return ['token' => ApiUtil::generateTokenFromUser($user), 'role' => $user->role_id];
        }
        throw new ApiServiceException(400, false,
            ['message' => 'Invalid email or password',
                'errorCode' => ErrorCode::UNAUTHORIZED]);
    }

    public function register($email, $password, $name)
    {
        return User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
            'role_id' => Role::STUDENT_ID
        ]);
    }

}
