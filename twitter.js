var worker = function (trackedWords) {
	var twitter = require('ntwitter');
	var redis = require('redis');
	var credentials = require('./credentials.js');

	//create redis client                                                                                                                                                                                                                       
	var client = redis.createClient();

	//words to track
	//var trackedWords = ['awesome', 'cool', 'rad', 'gnarly', 'groovy'];

	var t = new twitter({
		consumer_key: credentials.consumer_key,
		consumer_secret: credentials.consumer_secret,
		access_token_key: credentials.access_token_key,
		access_token_secret: credentials.access_token_secret
	});

	t.stream(
		'statuses/filter',
		{ track: trackedWords },
		function(stream) {
			stream.on('data', function(tweet) {
				console.log(tweet.text);
				//if awesome is in the tweet text, increment the counter
				for(var i = 0; i < trackedWords.length; i++){
					if(tweet.text.indexOf(trackedWords[i]) > -1) {
						client.incr(trackedWords[i]);
					}
				}
			});
		}
	);
};

module.exports = worker;