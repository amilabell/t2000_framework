const fs = require('fs');
var express = require('express');
var router = express.Router();


var methods = {
   /* getDimCat: async function(dim,id){
        var result;
        var resp = await database_methods.data.getDimScore(dim, id);
        console.log(resp)
        var score = resp[0][dim];
        console.log(score);
        if(score<=20){
            result = 'very low';
            return result;
        }else if(score <=40 && score>20){
            result = 'low';
            return result;
        }else if (score <=60 && score>40){
            result = 'medium';
            return result;
        }else if (score <= 80 && score>60){
            result = 'high';
            return result;
        }else if (score >80){
            result = 'very high';
            return result;
        }
    }*/
}

exports.data = methods;