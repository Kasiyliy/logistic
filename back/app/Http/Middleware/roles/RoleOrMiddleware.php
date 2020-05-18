<?php

namespace App\Http\Middleware\roles;

use App\Exceptions\ApiServiceException;
use App\Http\Errors\ErrorCode;
use App\Http\Utils\ApiUtil;
use Closure;
use Auth;

class RoleOrMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roleIds)
    {
        if (in_array(Auth::user()->role_id, $roleIds)) {
            return $next($request);
        } else {
            if (ApiUtil::checkUrlIsApi($request)) {
                throw new ApiServiceException(403, false,
                    [
                        'errors' => [
                            'Forbidden',
                        ],
                        'errorCode' => ErrorCode::ACCESS_DENIED
                    ]);
            } else {
                request()->session()->flash('warning', 'Доступ запрещен!');
                return redirect()->back();
            }
        }
    }
}
