<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use DB;

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
    
    public function adminLogin(Request $req){
        $admin = array();
        $admin['email'] = $req->email;
        $admin['password'] = $req->password;
        $dbAdmin = DB::table('admins')->where('email',$req->email)->first();
        if($dbAdmin === null){
            return view('pages.poll.admin-error');
        }
        else {
            if($dbAdmin->password === $req->password){
                return view('pages.poll.poll-details');
            }
            else{
                return view('pages.poll.admin-error');
            }
        }
        
    }
    public function userLogin(Request $req){
        $events = DB::table('polling_events')->where('year','2019');
        $sId = $req->userId;
        return response()->json($events);
        //return view('pages.poll.user-polling',compact('events','sId'));
    }
}
