<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Attribution;
use App\Models\InscriptionEnseignant;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function index(){
        $users= User::where('role','User')->get();
        $userCount = $users->count(); // Count the number of users
        $userNonValideCount = User::where('status','Non Valide')->get()->count();
        return response()->json([
         'status'=>200,
         'user_count' => $userCount,
         'users'=>$users,
         'userNonValideCount'=>$userNonValideCount
        ]);
    }
    public function updateStatus($id){

        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => 404,
                'message' => 'User not found'
            ], 404);
        }

        $user->status = request('status');
        $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'Statut modifié avec succès'
        ]);
    }

    public function getuser($id){
        $user =  User::find($id);

        return response()->json([
         'status'=>200,
         'user'=>$user,

        ]);
    }


    public function  destroy($id){
        $user =  User::find($id);
        if($user){
            $user->delete();
            return response()->json([
                'status'=>200,
                'message'=>'user supprimé avec succès'
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>' Aucun user trouvé'
            ]);
        }


    }

    public function updateUser (Request $request , $id ){
        $validator = Validator::make($request->all(),[
            'name' => 'string|required',
            'email' => 'string|required',
            'phone' => 'string|required',
            'role' => 'string|required',


          ]);
          if($validator->fails()){
            return response()->json([
               'validator_errors'=>$validator->messages(),
            ]);
       }

       else{
        $user =  user::find($id);
        if(  $user ){
            $user->name = $request->input('name');
            $user->phone = $request->input('phone');
            $user->email = $request->input('email');
            $user->role = $request->input('role');

            $user->update();
            return response()->json([
                'status'=>200,
                'message'=>'Utilisateur Modifier  avec succès'

            ]);

        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>"utilisateur n'exciste pas"

            ]);        }

    } }

    public function updateProfile(Request $request , $id ){
        $validator = Validator::make($request->all(),[
            'name' => 'string|required',
            'email' => 'string|required',
            'phone' => 'string|required',


          ]);
          if($validator->fails()){
            return response()->json([
               'validator_errors'=>$validator->messages(),
            ]);
       }

       else{
        $user =  user::find($id);
        if(  $user ){
            $user->name = $request->input('name');
            $user->phone = $request->input('phone');
            $user->email = $request->input('email');

            $user->update();
            return response()->json([
                'status'=>200,
                'message'=>'Profile Modifier  avec succès'

            ]);

        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>"utilisateur n'exciste pas"

            ]);        }

    } }

    public function updatePassword(Request $request, $id)
    {
        // Validate the request data
        $request->validate([
            'newPassword' => 'required|string|min:8', // Add any additional validation rules here
        ]);

        // Find the user by ID
        $user = User::findOrFail($id);

        // Hash the new password
        $hashedPassword = Hash::make($request->newPassword);

        // Update the user's password
        $user->password = $hashedPassword;
        $user->save();

        // Return a success response
        return response()->json(['status' => 200, 'message' => 'Password updated successfully']);
    }



    public function getUsers(){
        $users = User::all();
        return response()->json (
            [
                'status'=>200,
                'users'=> $users
            ]


            );
    }

}
