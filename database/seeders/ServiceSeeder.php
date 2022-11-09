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
                'service' => 'Oral Prophylaxis/Cleaning',
                'price'   => '800'
            ],
            [
                'service' => 'Extraction',
                'price'   => '800'
            ],
            [
                'service' => 'Extraction (Wisdom Tooth)',
                'price'   => '8000'
            ],
            [
                'service' => 'Braces',
                'price'   => '45000'
            ],
            [
                'service' => 'Prosthesis/Denture (plastic)',
                'price'   => '8000'
            ],
            [
                'service' => 'Prosthesis/Denture (porcelain)',
                'price'   => '25000'
            ],
            [
                'service' => 'Fixed Partial Denture (FPO/Jacket)',
                'price'   => '8000'
            ],
            [
                'service' => 'Tooth Restoration (Pasta)',
                'price'   => '1000'
            ],
        ];

        foreach($data as $service){
            Service::create($service);
        }
    }
}
