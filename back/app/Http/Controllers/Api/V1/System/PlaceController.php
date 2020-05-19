<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 19.05.2020
 * Time: 04:04
 */

namespace App\Http\Controllers\Api\V1\System;


use App\Http\Controllers\ApiBaseController;
use App\Http\Requests\Api\V1\System\CreatePlaceApiRequest;
use App\Models\System\Place;

class PlaceController extends ApiBaseController
{

    public function createPlace(CreatePlaceApiRequest $request)
    {
        $place = Place::create($request->all());
        return $place;
    }

    public function getPlaces()
    {
        return Place::all();
    }
}