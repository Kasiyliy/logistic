<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 19.05.2020
 * Time: 04:05
 */

namespace App\Http\Requests\Api\V1\System;


use App\Http\Requests\Api\ApiBaseRequest;

class CreatePlaceApiRequest extends ApiBaseRequest
{
    public function injectedRules()
    {
        return [
            'lat' => ['required', 'numeric'],
            'lng' => ['required', 'numeric'],
            'name' => ['required']
        ];
    }

}