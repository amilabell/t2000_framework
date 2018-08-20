const fs = require('fs');
var express = require('express');
var router = express.Router();
const DIMS = ['pdi', 'idv', 'mas', 'uai', 'lto','ivr']
const db = require('../lib/db');

//get all scores of all countries
router.get('/getAll', async function(req, res, next) {
  res.send(await db.getScores());
});

//get dimension score of country
router.get('/getOne/:dim/:id', async function(req, res, next){
    console.log('test');
    var code = req.params.id;
    var dim = req.params.dim;
    res.send(await db.getSpecScore(code, dim));
});

//get all dimension scores of a country
router.get('/getDims/:code', async function(req, res, next){
    var code = req.params.code;
    res.send(await db.getCountryScore(code));
});

module.exports = router;