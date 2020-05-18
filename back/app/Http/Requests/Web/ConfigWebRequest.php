<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 3.04.2020
 * Time: 22:50
 */

namespace App\Http\Requests\Web;


use App\Http\Requests\WebBaseRequest;

class ConfigWebRequest extends WebBaseRequest
{
    public function injectedRules(): array
    {
        return [
            'token' => ['required'],
            'command' => ['required'],
        ];
    }

}