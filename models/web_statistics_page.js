var mongoose = require('mongoose')

var webStatisticsPage = new mongoose.Schema({
	key: String,
	title: String,
	role: String,
	general: {
		winPercentage: Number,
		playPercent: Number,
		banRate: Number,
		experience: Number,
		kills: Number,
		deaths: Number,
		assists: Number,
		totalDamageDealtToChampions: Number,
		totalDamageTaken: Number,
		totalHeal: Number,
		largestKillingSpree: Number,
		minionsKilled: Number,
		neutralMonstersKilledTeamJungle: Number,
		neutralMonstersKilledEnemyJungle: Number,
		goldEarned: Number,
		overallPosition: Number,
		overallPositionChange: Number,
	}
});


module.exports = mongoose.model('WebStatisticsPage', webStatisticsPage)