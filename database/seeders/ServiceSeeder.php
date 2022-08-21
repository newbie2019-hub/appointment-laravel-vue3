<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'service' => 'Dental Checkup',
                'price'   => '300'
            ],
            [
                'service' => 'Teeth Cleaning',
                'price'   => '600'
            ],
            [
                'service' => 'Teeth Whitening',
                'price'   => '700'
            ],
            [
                'service' => 'Teeth Extraction',
                'price'   => '750'
            ],
            [
                'service' => 'Crowns',
                'price'   => '1500'
            ],
            [
                'service' => 'Teeth Fillings',
                'price'   => '800'
            ],
            [
                'service' => 'Veneers',
                'price'   => '1000'
            ],
            [
                'service' => 'Braces',
                'price'   => '15000'
            ],
            [
                'service' => 'Dentures',
                'price'   => '1000'
            ],
        ];

        foreach($data as $service){
            Service::create($service);
        }
    }
}
