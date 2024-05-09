<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    //
    public function index()
    {
        $contacts=  Contact::all() ;
        return response()->json([
            'status'=>200,
            'contacts'=>$contacts,

           ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'companyName' => 'required',
            'mail' => 'required|email',
            'message' => 'required',
        ]);

        Contact::create($request->all());

        return response()->json([
            'status'=>200,
            'message'=>'Ajouter form avec succès'

        ]);
    }

    public function destroy($id)
    {
        $contact =  Contact::find($id);

            if($contact){
                $contact->delete();
                return response()->json([
                    'status'=>200,
                    'message'=>'Message supprimé avec succès'
                ]);
            }
            else{
                return response()->json([
                    'status'=>404,
                    'message'=>' Aucun Conatct trouvé'
                ]);
            }
    }
}
