<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Notifications\NewRéunion;
use App\Notifications\UserFollowNotification;
class AuthController extends Controller
{
    public function register (Request $request){
            $validator = Validator::make($request->all(),[
                'companyName'=>'required|max:191',
                'email'=>'required|email|max:191|unique:users,email',
                'password'=>'required|min:8',
                'phone'=>'required|max:191',

              ]);


        if($validator->fails()){
             return response()->json([
                'validator_errors'=>$validator->messages(),
             ]);
        }
        else{
            $user  = new User;
            $user->name =  $request->input('companyName');
            $user->email =  $request->input('email');
            $user->password =  Hash::make($request->input('password'));
            $user->phone =  $request->input('phone');
            $user->role =  "User";
            $user->status =  "Non Valide";

            $user->save();

            $token =$user->createToken($user->email.'_token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'token'=>$token,
                'message'=>'enregistré avec succès'

            ]);
        }
    }



    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'required|max:191',
            'password'=>'required',
        ]);


        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->message(),
            ]);
        }
        else{
            $user = User::where('email', $request->email)->first();

            if(! $user || ! Hash::check($request->password, $user->password)){
                return response()->json([
                    'status'>401,
                    'message'=>'Identifiants invalides'
                ]);
            }
            else{

                if($user->role === "Admin"){
                    $token =$user->createToken($user->email.'_AdminToken',['server:admin'])->plainTextToken;

                }

                else {
                    $token =$user->createToken($user->email.'_UserToken',['server:user'])->plainTextToken;

                }
                return response()->json([
                    'status'=>200,
                    'authUser'=>$user,
                    'auth_role'=>$user->role,
                    'auth_password'=>$user->password,
                    'token'=>$token,
                    'message'=>'connecté avec succès'

                ]);
            }
        }
    }


    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>200,
            'message'=>'déconnecté avec succès'
        ]);
    }

}
