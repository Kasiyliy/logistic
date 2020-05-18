<?php
/**
 * @license Apache 2.0
 */

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\ApiBaseController;
use App\Http\Errors\ErrorCode;
use App\Http\Requests\Api\V1\Auth\LoginApiRequest;
use App\Http\Requests\Api\V1\Auth\RegisterApiRequest;
use App\Services\v1\AuthService;
use Illuminate\Support\Facades\Auth;


class AuthController extends ApiBaseController
{
    protected $authService;

    /**
     * AuthController constructor.
     * @param $authService
     */
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function authFail()
    {
        return $this->failedResponse(['message' => 'Unauthorized', 'errors' => [
            'errorCode' => ErrorCode::UNAUTHORIZED
        ]]);
    }

    public function login(LoginApiRequest $request)
    {
        $email = $request->email;
        $password = $request->password;
        return $this->successResponse($this->authService->login($email, $password));
    }

    public function register(RegisterApiRequest $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        return $this->successResponse(['user' => $this->authService->register($email, $password, $name)]);
    }

    public function me()
    {
        return $this->successResponse(Auth::user());
    }
}
