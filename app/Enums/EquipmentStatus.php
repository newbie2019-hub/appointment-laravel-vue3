<?php

namespace App\Enums;

enum EquipmentStatus: int
{
    case 1 = 'Good Condition';
    case 2 = 'For Repair';
    case 3 = 'For Cleaning';
    case 4 = 'For Disposal';
}
