<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFreightOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freight_orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('initial_place_id');
            $table->foreign('initial_place_id')
                ->references('id')
                ->on('places');
            $table->timestamp('start_date')->nullable(true);
            $table->unsignedBigInteger('termination_place_id');
            $table->foreign('termination_place_id')
                ->references('id')
                ->on('places');
            $table->timestamp('finish_date')->nullable(true);
            $table->double('distance')->default(null);
            $table->double('height');
            $table->double('weight');
            $table->double('price');
            $table->double('price_for_distance');
            $table->text('description');
            $table->text('contact_information');
            $table->text('car_specific');
            $table->string('status');
            $table->timestamp('real_end_date')->nullable(true);
            $table->unsignedBigInteger('driver_user_id');
            $table->foreign('driver_user_id')
                ->references('id')
                ->on('users');
            $table->unsignedBigInteger('car_type_id');
            $table->foreign('car_type_id')
                ->references('id')
                ->on('car_types');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('freight_orders');
    }
}
