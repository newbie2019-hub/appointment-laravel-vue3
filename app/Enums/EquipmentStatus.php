<?php

namespace App\Enums;

enum EquipmentStatus: string
{
    case GoodCondition = '1';
    case ForRepair = '2';
    case ForCleaning = '3';
    case ForDisposal = '4';
}
