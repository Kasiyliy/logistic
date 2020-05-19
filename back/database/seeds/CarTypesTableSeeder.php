<?php

use Illuminate\Database\Seeder;

use App\Models\System\CarType;

class CarTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CarType::create([
            'name' => 'Фура'
        ]);

        CarType::create([
            'name' => 'Грузовик'
        ]);

        CarType::create([
            'name' => 'Легковой'
        ]);

        CarType::create([
            'name' => 'Внедорожник'
        ]);
    }
}
