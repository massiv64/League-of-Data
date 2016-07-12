var mongoose = require('mongoose')


var webChampionRoles = new mongoose.Schema({
	key: String,
	name: String,
	lastUpdated: Number,
	roles: [{
		role: String,
		title: String,
		games: Number,
		percentPlayed: Number
	}]


})


module.exports = mongoose.model('WebChampionRoles', webChampionRoles);