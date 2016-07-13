"use strict"
const express = require('express')
const app = express()
const knex = require('knex')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compress')

//middleware
const overallData = require('./middleware/overallData.js')


//routes
let champion = require('./routes/champion')
let matchup = require('./routes/matchup')
let matchupJson = require('./routes/matchup_json')
let apiStatic = require('./routes/api_static')
let stats = require('./routes/stats')
let index = require('./routes/index')

//view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compress());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '2kb', extended: true}));
app.use(bodyParser.urlencoded({limit: '2kb', extended: true}));

app.use(express.static(path.join(__dirname, 'public'), {maxAge:86400000}));




app.use(overallData);

app.use('/champion', champion);
app.use('/matchup', matchup);
app.use('/matchupJson', matchupJson);
app.use('/static', apiStatic);

app.use('/statistics', statistics);
app.use('/faq', faq);
app.use('/', index);

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.statusCode = err.status;
      res.render('error', {
          pageData:{
            appName: 'core',
            name:'error',
            title: 'We got ourselves a problem...'
          },
          message: err.message,
          error: err
      });
  });
} else {

  app.use(function(err, req, res, next) {
    res.statusCode = err.status;
    res.render('error', {
        pageData:{
          appName: 'core',
          name:'error',
          title: 'We got ourselves a wild teemo problem...'
        },
        message: err.message,
        error: {}
    });
  });
}

module.exports = app;