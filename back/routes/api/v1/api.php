<?php

Route::group(['middleware' => 'api'], function () {


    Route::group(['namespace' => 'Auth'], function () {
        Route::get('/login', ['uses' => 'AuthController@authFail', 'as' => 'login']);
        Route::post('/login', ['uses' => 'AuthController@login']);
        Route::post('/register', ['uses' => 'AuthController@register']);
    });

    //AUTHENTICATED
    Route::group(['middleware' => 'auth:api'], function () {
        Route::group(['namespace' => 'Auth'], function () {
            Route::post('/me', ['uses' => 'AuthController@me']);
        });

        Route::group(['namespace' => 'System'], function () {
            Route::get('/roles', ['uses' => 'SystemController@getRoles']);
            Route::get('/car-types', ['uses' => 'SystemController@getCarTypes']);
            Route::get('/users/by-role/{id}', ['uses' => 'UserController@getUsersByRole']);
            Route::get('/users/by-email/{email}', ['uses' => 'UserController@getUserByEmail']);
            Route::post('/users', ['uses' => 'UserController@createUser']);

            Route::post('/places', ['uses' => 'PlaceController@createPlace']);
            Route::get('/places', ['uses' => 'PlaceController@getPlaces']);

            Route::post('/freight-orders', ['uses' => 'FreightController@createFreightOrder']);
            Route::get('/freight-orders/my', ['uses' => 'FreightController@getMyFreightOrders']);
            Route::get('/freight-orders', ['uses' => 'FreightController@getAllFreightOrders']);
            Route::get('/freight-orders/by-users/{id}', ['uses' => 'FreightController@getUserFreightOrders']);
        });
    });

});
