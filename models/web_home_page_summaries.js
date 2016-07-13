var mongoose = require('mongoose')

var webHomePageSummaries = new mongoose.Schema({
	id: Number,
	data:[{
		title: String,
		total: Number,
		mostImproved: {
			key: String,
			name: String,
			difference: String,
			overall: String
		},
		leastImproved: {
			key: String,
			name: String,
			difference: String,
			overall: String
		},
		highestWinRate: {
			key: String,
			name: String,
			value: Number
		},
		lowestWinRate: {
			key: String,
			name: String,
			value: Number
		},
		bestOverall: {
			key: String,
			name: String,
			value: Number
		},
		worstOverall: {
			key: String,
			name: String,
			value: Number
		}
	}]
})


module.exports = mongoose.model('WebHomePageSummaries', webHomePageSummaries);