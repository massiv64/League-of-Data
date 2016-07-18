"use strict";
var apiData = require('../api_data');
var express = require('express');
var router = express.Router();


//routes for in-depth masteries
router.get('/masteries/:id', function(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=180');

        var id = req.params.id;
    if(apiData.masteries.hasOwnProperty(id)){
        res.json(apiData.masteries[id]); 
    } else {
        res.statusCode = 404;
        res.send('invalid request');
    }
});

router.get('/summoners/:id', function(req, res) {
    var id = req.params.id;
    var match = false;
    for (var prop in apiData.summoners){
        if(apiData.summoners.hasOwnProperty(prop) && apiData.summoners[prop].id === Number(id)){
            res.json(apiData.summoners[prop]);
            match = true;
            break;
        }
    } 
    if (!match){
        res.statusCode = 404;
        res.send('invalid request');
    }
});


module.exports = router;