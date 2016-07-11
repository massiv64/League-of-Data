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