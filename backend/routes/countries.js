const fs = require('fs');
var express = require('express');
var router = express.Router();
const db = require('../lib/db');

//gets all countries
router.get('/getAll', async function(req, res, next) {
  res.send(await db.getCountries());
});

//get single country
router.get('/getOne/:id', async function(req, res, next) {
    var id = req.params.id;
    res.send(await db.getCountry(id));
});

module.exports = router;