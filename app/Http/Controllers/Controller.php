<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function send_sms($sms_from = 'M. Dental', $sms_to, $sms_msg)
    {
        $query_string = "api.aspx?apiusername=API9IKIXLLJ8Q" . "&apipassword=API9IKIXLLJ8Q9IKIX";
        $query_string .= "&senderid=" . rawurlencode($sms_from) . "&mobileno=" . rawurlencode($sms_to);
        $query_string .= "&message=" . rawurlencode(stripslashes($sms_msg)) . "&languagetype=1";
        $url = "http://gateway.onewaysms.com.au:10001/" . $query_string;
        $fd = @implode('', file($url));
        if ($fd) {
            if ($fd > 0) {
                print("MT ID : " . $fd);
                $ok = "success";
            } else {
                print("Please refer to API on Error : " . $fd);
                $ok = "fail";
            }
        } else {
            $ok = "fail";
        }
        return $ok;
    }
}
