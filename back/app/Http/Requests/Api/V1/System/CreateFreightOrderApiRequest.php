<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 19.05.2020
 * Time: 07:19
 */

namespace App\Http\Requests\Api\V1\System;


use App\Http\Requests\Api\ApiBaseRequest;

class CreateFreightOrderApiRequest extends ApiBaseRequest
{
    public function injectedRules()
    {
        return [
            'initial_place_id' => ['required', 'exists:places,id'],
            'start_date' => ['required'],
            'termination_place_id' => ['required', 'exists:places,id'],
            'finish_date' => ['required'],
            'distance' => ['required'],
            'height' => ['required'],
            'weight' => ['required'],
            'price' => ['required'],
            'price_for_distance' => ['required'],
            'description' => ['required'],
            'contact_information' => ['required'],
            'car_specific' => ['required'],
            'driver_user_id' => ['required', 'exists:users,id'],
            'car_type_id' => ['required', 'exists:car_types,id'],
        ];
    }

}