<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use DB;
use Illuminate\Http\Response;

date_default_timezone_set("America/El_Salvador");

class UserController extends Controller
{


    public function prueba(){
        $usuario = DB::connection('facturacion')->select("
        select * from T_Usuario 
        ");


        return response()->json($usuario);
    }
}