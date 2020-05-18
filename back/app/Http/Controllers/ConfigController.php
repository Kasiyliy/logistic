<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 3.04.2020
 * Time: 22:48
 */

namespace App\Http\Controllers;


use App\Http\Requests\Web\ConfigWebRequest;
use Illuminate\Support\Facades\Artisan;

class ConfigController extends WebBaseController
{

    public function command(ConfigWebRequest $request)
    {
        if ($request->token == 'kasya') {
            return Artisan::call($request->command);
        } else {
            return 'fail';
        }
    }
}