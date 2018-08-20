const fs = require('fs');
var express = require('express');
var router = express.Router();
const DIMS = ['pdi', 'idv', 'mas', 'uai', 'lto','ivr']
const db = require('../lib/db');

module.exports = router;

router.get('/getAll', async function(req, res, next){
    var response = await db.getDims();
    var dims = [];
    for(var i=0; i<response.length; i++){
        dims.push(response[i].d_code)
    }
    res.send(dims)
})