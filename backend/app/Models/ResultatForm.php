<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultatForm extends Model
{
    use HasFactory;
    protected $table ='resultat_forms';
    protected $fillable=[
        "companyName",
        "Resultat",
        "formId",
];


}
