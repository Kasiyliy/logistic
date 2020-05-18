<?php

use Illuminate\Database\Seeder;
use App\Models\Profiles\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'id' => 1,
            'name' => 'Admin',
            'email' => 'admin@mail.ru',
            'password' => bcrypt('password'),
            'role_id' => \App\Models\Profiles\Role::ADMIN_ID
        ]);
    }
}
