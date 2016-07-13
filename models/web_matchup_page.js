var mongoose = require('mongoose')

var webMatchupPage = new mongoose.Schema({
	champ1: {
		id: Number,
		key: String,
		name: String,
		role: String,
		roleTitle: String,
		performance: Number
	},
	champ2: {
		id: Number,
		key: String,
		name: String,
		role: String,
		roleTitle: String,
		performance: Number
	},
	role: String,
	dateAdded: Number,
	totalGames: Number,
	general: [{
		title: String,
		champ1: {
			val: Number,
			change: Number,
			score: Number
		},
		champ2: {
			val: Number,
			change: Number,
			score: Number
		}
	}],
	championMatrix: {
		labels: [String],
		champ1: [Number],
		champ2: [Number]
	},
	goldLength: {
		champ1: [Number],
		champ2: [Number]
	}
});

module.exports = mongoose.model('WebMatchupPage', webMatchupPage);