<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRideTypeColumnToFreightOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('freight_orders', function (Blueprint $table) {
            $table->string('ride_type')->default('CUSTOM');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('freight_orders', function (Blueprint $table) {
            $table->dropColumn('ride_type');
        });
    }
}
