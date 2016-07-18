var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/league_of_data');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log('Connection Made!');
});