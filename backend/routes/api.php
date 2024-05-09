<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\FormController;
use App\Http\Controllers\ContactController;
use Laravel\Sanctum\Sanctum;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[AuthController::class, 'register']);
Route::post('login',[AuthController::class, 'login']);
Route::post('submit_result_form',[FormController::class, 'postResulteForm']);
Route::post('StoreContact',[ContactController::class, 'store']);


Route::middleware(['auth:sanctum','isAdmin'])->group( function(){
    Route::post('adminlogout',[AuthController::class, 'logout']);
    Route::get('CheckingAuth', function(){
        return response()->json(['message'=>'You are in', 'status'=>200], 200);

    });

    Route::get('user',[UserController::class, 'index']);
    Route::get('admin_get_user/{id}',[UserController::class, 'getuser']);
    Route::put('update_statut/{id}',[UserController::class, 'updateStatus']);
    Route::put('update_user/{id}',[UserController::class, 'updateUser']);
    Route::put('admin_updatePassword/{id}',[UserController::class, 'updatePassword']);
    Route::put('AdminUpdate_profile/{id}',[UserController::class, 'updateProfile']);

    Route::delete('/delete_user/{id}',[UserController::class, 'destroy']);
    Route::get('AdmingetForms',[FormController::class, 'get']);
    Route::delete('/Admin_delete_forme/{id}',[FormController::class, 'destroy']);
    Route::get('AdmingetFormsResult/{companyName}/{uniqueId}',[FormController::class, 'AdminGetfromResulte']);

    Route::get('AdmingetContact',[ContactController::class, 'index']);
    Route::delete('/Admin_delete_Contact/{id}',[ContactController::class, 'destroy']);



});


Route::middleware(['auth:sanctum','isUser'])->group( function(){

    Route::post('userlogout',[AuthController::class, 'logout']);
    Route::get('userCheckingAuth', function(){
        return response()->json(['message'=>'You are in', 'status'=>200], 200);

    });

    Route::get('get_user/{id}',[UserController::class, 'getuser']);
    Route::put('updatePassword/{id}',[UserController::class, 'updatePassword']);
    Route::put('update_profile/{id}',[UserController::class, 'updateProfile']);

    Route::post('add_form',[FormController::class, 'Add']);
    Route::get('getFormsWitheName/{companyName}',[FormController::class, 'getWitheName']);
    Route::get('getForm/{id}',[FormController::class, 'getform']);
    Route::get('getForms',[FormController::class, 'get']);
    Route::delete('/delete_forme/{id}',[FormController::class, 'destroy']);
    Route::get('getFormsResult/{companyName}/{uniqueId}',[FormController::class, 'getfromResulte']);
    Route::put('update_form/{id}',[FormController::class, 'updateform']);


});



