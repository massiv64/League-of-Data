"use strict"

var errors = {
	champNotFound: "That champ or role doesn\'t appear to exist!",
	pageNotFound: "We couldn\'t find the page you are looking for - sorry!",
	serverMaintenance: "For some reason we couldn\'t get the page to load - Chances are we're updating our data right now",
	invalidMatchup: "That appears to be an invalid or old matchup!"
}

var produceError = function(errorType, errorNumber){
	var err = new Error(errors[errorType]);
	err.status = errorNumber || 404;
	return err;
}


module.exports = produceError;