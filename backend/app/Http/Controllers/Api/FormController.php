<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;

use App\Models\Form;
use App\Models\ResultatForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class FormController extends Controller
{
    public function getWitheName($companyName){
        $forms= Form::where('companyName',$companyName)->get();
        $latestForm = Form::where('companyName', $companyName)->whereDate('expirationDate', '<=', Carbon::now())->latest('debutDate')->first();


        return response()->json([
         'status'=>200,
         'forms'=>$forms,
         'latestForm'=>$latestForm,

        ]);
    }

    public function updateform(Request $request , $id ){
        $validator = Validator::make($request->all(),[
            'companyName'=>'required|max:191',
            'selectedCriteriaString'=>'required|max:191',
            'formLink'=>'required',
            'expirationDate'=>'required',

          ]);
          if($validator->fails()){
            return response()->json([
               'validator_errors'=>$validator->messages(),
            ]);
       }

       else{
        $form =  Form::find($id);
        if(  $form ){
            $form->companyName =  $request->input('companyName');
            $form->listeCritere =  $request->input('selectedCriteriaString');
            $form->url =  $request->input('formLink');
            $form->debutDate = Carbon::now();
            $form->expirationDate =  $request->input('expirationDate');

            $form->update();
            return response()->json([
                'status'=>200,
                'message'=>'Form Modifier  avec succès'

            ]);

        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>"utilisateur n'exciste pas"

            ]);        }

    } }


    public function get(){
        $forms= Form::all();
        $formCount = $forms->count(); // Count the number of users


        return response()->json([
         'status'=>200,
         'forms'=>$forms,
         'formCount'=>$formCount,

        ]);
    }

    public function Add (Request $request){
        $validator = Validator::make($request->all(),[
            'companyName'=>'required|max:191',
            'selectedCriteriaString'=>'required|max:191',
            'formLink'=>'required',
            'expirationDate'=>'required',

          ]);


    if($validator->fails()){
         return response()->json([
            'validator_errors'=>$validator->messages(),
         ]);
    }
    else{
        $form  = new Form;
        $form->companyName =  $request->input('companyName');
        $form->listeCritere =  $request->input('selectedCriteriaString');
        $form->url =  $request->input('formLink');
        $form->debutDate = Carbon::now();
        $form->expirationDate =  $request->input('expirationDate');

        $form->save();


        return response()->json([
            'status'=>200,
            'message'=>'Ajouter form avec succès'

        ]);
    }
}
public function postResulteForm (Request $request){
    $validator = Validator::make($request->all(),[
        'companyName'=>'required|max:191',
        'Resultat'=>'required|max:191',
        'formId'=>'required|max:191',
      ]);


if($validator->fails()){
     return response()->json([
        'validator_errors'=>$validator->messages(),
     ]);
}
else{
    $formResulte  = new ResultatForm;
    $formResulte->companyName =  $request->input('companyName');
    $formResulte->Resultat =  $request->input('Resultat');
    $formResulte->formId =  $request->input('formId');


    $formResulte->save();


    return response()->json([
        'status'=>200,
        'message'=>'Ajouter form avec succès'

    ]);
}
}

public function getfromResulte($companyName,$uniqueId){
    $fromResulte= ResultatForm::where('companyName',$companyName)->where('formId',$uniqueId)->get();

    return response()->json([
     'status'=>200,
     'fromResulte'=>$fromResulte,

    ]);
}
public function AdminGetfromResulte($companyName,$uniqueId){
    $fromResulte= ResultatForm::where('companyName',$companyName)->where('formId',$uniqueId)->get();

    return response()->json([
     'status'=>200,
     'fromResulte'=>$fromResulte,

    ]);
}


public function getform($id){
    $form =  Form::find($id);

    return response()->json([
     'status'=>200,
     'form'=>$form,

    ]);
}
public function  destroy($id){
    $Form =  Form::find($id);
    if($Form){
        $Form->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Form supprimé avec succès'
        ]);
    }
    else{
        return response()->json([
            'status'=>404,
            'message'=>' Aucun Form trouvé'
        ]);
    }


}
}
