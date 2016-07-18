var WebOverallStats = require('../models/web_overall_stats.js');
var produceError = require('../logic/produce_error.js');


var ddPatch = require('../api_data/dd_patch.json').ddPatch
var core = {
	ddPatch: ddPatch,
	resetCache: ddPatch + Math.random().toFixed(6),
	masteryOrder: ['Offense','Defense','Utility'],
	// headline: require('../headline.js')
};

module.exports = function(req, res, next){
	res.locals.core = core;

	if(!core.championsAnalyzed){
		WebOverallStats.findOne({}, function(err,data) {
			if(err) {
				return next(produceError('serverMaintenance', 503));
			} else if(!data) {
				return next(produceError('serverMaintenance', 503))
			} else {
				core.championsAnalyzed = data.championsAnalyzed;
				core.patchHistory = data.patch;
				next();
			}
		});
	} else {
		next();
	}
};