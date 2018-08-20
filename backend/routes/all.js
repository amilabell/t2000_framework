const fs = require('fs');
var express = require('express');
var router = express.Router();
const DIMS = ["pdi", "idv", "mas", "uai", "lto"];
const db = require('../lib/db');

router.get('/country/:c_code', async function(req, res, next) {
  var c_code = req.params.c_code;
  var result = await getCatAndTxt(c_code);
  res.send(result);
});

//checks whether a score is high, medium or low
function getPole(score){
    var pole;
    switch (true) {
    case (score < 20):
        pole = false;
        break;
    case (score < 40):
        pole = false;
        break;
    case (score < 60):
        pole = null;
        break;
    case (score < 80):
        pole = true;
        break;
    case (score < 130):
        pole = true;
        break;
    }
    return pole;
}

async function checkPrefs(pole, dimension){
    var result = [];

    var idList = await db.getSpecPrefs(dimension, pole);
    if(idList.length > 0 || idList != null){
        for(var j=0; j<idList.length; j++){
            console.log(idList[j].pref_id);
            var text = await db.getPrefById(idList[j].pref_id);
            result.push(text);
        }
    }
    return result;
}

async function getCatAndTxt(c_code){
  var pole = '';
  var texts = [];
  //get all dimension scores of the country
  var scores = await db.getCountryScore(c_code);
  //iterate through the dimension scores
  for(var i=0; i<scores.length; i++){
    //check whether score is high or low
    pole = getPole(scores[i].score);
    //get corresponding ids
    if(pole === true || pole === false){
        var result = await checkPrefs(pole, scores[i].d_code);
        texts.push(result);
    }
  }
  return texts;
}

module.exports = router;