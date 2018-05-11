var request = require("request"); // Include the request lib - run npm install request
exports.handler = function(event, context, callback) {
	callback = context.done;

	var data = event.bodyJson || {};
	var url = "https://louisvilleky.gov/services/toolbox_services.json?limit=0";
	
	// Make the request to url and return the Obj
	request({
	    url: url,
	    json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
		jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''));
	        console.log(jsonBody) // Print the json response
	        callback(null, jsonBody); // Return the JSON object back to our API call
	    }    
	});
};
