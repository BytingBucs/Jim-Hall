var ntwitter = require("ntwitter"),
	redis = require("redis"),
	credentials = require("./credentials.json"),
	redisClient,
	twitter,
	counts = {};

// set up our twitter object
twitter = ntwitter(credentials);

redisClient = redis.createClient();

redisClient.get("awesome", function (err, awesomeCount){
	if (err !== null){
		console.log("ERROR:" + err)

		return;
	}


counts.awesome = parseInt(awesomeCount,10) || 0;


// set up our twitter stream with three parameters, 
// seperated by commas
twitter.stream(
	// the first parameter is a string
	"statuses/filter",

	//second parameter, an object containg an array
	{"track":["awesome", "cool", "rad", "gnarly", "groovy"]},

	//third parameter, is our callback for when the stream is created
	function(stream){
		stream.on("data", function(tweet) {
			if (tweet.text.indexOf("awesome")> -1){
				//increment the awesome counter

				redisClient.incr("awesome");	
				counts.awesome = counts.awesome +1;
				}
			});
		}
	);

});

module.exports = counts;