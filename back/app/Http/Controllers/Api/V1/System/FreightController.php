<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 19.05.2020
 * Time: 07:15
 */

namespace App\Http\Controllers\Api\V1\System;


use App\Http\Controllers\ApiBaseController;
use App\Http\Requests\Api\V1\System\CreateFreightOrderApiRequest;
use App\Models\System\FreightOrder;

class FreightController extends ApiBaseController
{
    public function createFreightOrder(CreateFreightOrderApiRequest $request)
    {
        $freightOrder = new FreightOrder();
        $freightOrder->fill($request->all());
        $freightOrder->status = 'Назначен';
        $freightOrder->save();
        return $freightOrder;
    }

    public function getFreightOrders()
    {
        return FreightOrder::with(['driver', 'carType', 'initialPlace', 'terminationPlace'])
            ->where('driver_user_id', auth()->id)->get();
    }
}