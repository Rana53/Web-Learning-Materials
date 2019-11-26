<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PollingSystem extends Controller
{
    function optionPage(){
        return view('pages.polling');
    }

    public function login(Request $req) {
        if (strcmp($req->option,"User-login") == 0){
            return view('pages.poll.user-login');
        }
        else{
            return view('pages.poll.admin-login');
        }
    }
}
