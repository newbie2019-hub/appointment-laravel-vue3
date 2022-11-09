<?php

namespace Database\Seeders;

use App\Models\Inventory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EquipmentSeeder extends Seeder
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
                'equipment' => 'Dental Chair',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Sterilizer',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Auto Clave',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Lavatory Sink',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Micro Motor',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Mouth Mirror',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Cotton Plier',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Excavator',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
            [
                'equipment' => 'Explorer',
                'status' => 1,
                'unit' => 'pc',
                'quantity' => 1,
                'remarks' => 'This item is in good condition',
                'type' => 1
            ],
        ];

        foreach($data as $item){
            Inventory::create($item);
        }
    }
}
