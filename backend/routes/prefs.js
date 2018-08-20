const fs = require('fs');
var express = require('express');
var router = express.Router();
const DIMS = ['pdi', 'idv', 'mas', 'uai', 'lto','ivr']
const db = require('../lib/db');

//get all preferences
router.get('/getAll', async function(req, res, next) {
  res.send(await db.getPrefs());
});

//get all hasPrefs
router.get('/getHasPrefs', async function(req, res, next) {
  var response = await db.getHasPrefs();
  console.log(response.length)
  res.send(response)
});

//get specific preferences
router.get('/getPref/:dim/:pole', async function(req, res, next) {
    var dim = req.params.dim;
    if(req.params.pole === 'true'){
        pole = true;
    }else if(req.params.pole === 'false'){
        var pole = false;
    }
    res.send(await db.getSpecPrefs(dim, pole));
})

//get Pref by id
router.get('/getSinglePref/:id', async function(req, res, next){
    var id = req.params.id;
    res.send(await db.getPrefById(id))
})

//getCategories
router.get('/getCats', async function(req, res, next){
    res.send(await db.getCats());
})


module.exports = router;