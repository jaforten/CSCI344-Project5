var worker = function (trackedWords) {
	var twitter = require('ntwitter');
	var redis = require('redis');
	var credentials = require('./credentials.js');
	
	
	//create redis client                                                                                                                                                                                                                       
	var client = redis.createClient();

	var t = new twitter({
		consumer_key: credentials.consumer_key,
		consumer_secret: credentials.consumer_secret,
		access_token_key: credentials.access_token_key,
		access_token_secret: credentials.access_token_secret
	});

	t.stream(
		'statuses/filter',
		{ track: trackedWords},
		function(stream) {
			stream.on('data', function(tweet) {
				console.log(tweet.text);
				//if awesome is in the tweet text, increment the counter
				for(var i = 0; i < trackedWords.length; i++){
					if(tweet.text.indexOf(trackedWords[i]) > -1) {
						client.incr(trackedWords[i]);
					};
				};
				/*for(var i = 0; i < sadWords.length; i++){
					if(tweet.text.indexOf(sadWords[i]) > -1) {
						client.incr(sadWords[i]);
					};
				};*/
			});
		}
	);
};

module.exports = worker;