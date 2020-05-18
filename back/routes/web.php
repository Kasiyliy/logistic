<?php
/**
 * Created by PhpStorm.
 * User: air
 * Date: 14.03.2020
 * Time: 19:43
 */


Route::get('/secure/config', ['uses' => 'ConfigController@command']);