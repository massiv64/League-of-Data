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

