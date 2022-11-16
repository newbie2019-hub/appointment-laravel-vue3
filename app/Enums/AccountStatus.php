<?php

namespace App\Enums;

enum AccountStatus: string
{
    case Approved = '1';
    case Pending = '0';
}
