
// We need to 'require' the                                                                                                                            
// following modules                                                                                                                    
var express = require("express"),
    http = require("http"),
    path = require("path"),
    redisClient = require("redis").createClient(),
    app = express();
	twitterWorker = require("./twitter.js");

happyWords = ['awesome', 'cool', 'rad', 'sweet', 'fantastic'];
sadWords = ['horrible','hate','sad'];
trackedWords = happyWords.concat(sadWords);

// This is our basic configuration                                                                                                                     
app.configure(function () {
    // Define our static file directory, it will be 'public'                                                                                           
    app.use(express.static(path.join(__dirname, 'public')));
});

//create twitterWorker
twitterWorker(trackedWords);

// Create the http server and get it to                                                                                                                
// listen on the specified port 3000                                                                                                                   
http.createServer(app).listen(3000, function(){
    console.log("Express server listening on port 3000");
});


app.get("/", function (req, res) {
    //send "Hello World" to the client as html
    res.send("HEY!!");
});

app.get("/happy.json", function(req, res) {
    redisClient.mget(happyWords, function(error, counts) {
    	if (error !== null) {
            // handle error here                                                                                                                       
            console.log("ERROR: " + error);
        } else {
        	var happy = [];
        	for(var i = 0; i < happyWords.length; i++){
	               happy.push({
	            	   "key" : happyWords[i],
	               	   "counts" : counts[i]
	               }); 
	        };	
	        
	     // use res.json to return JSON objects instead of strings
	        res.json(happy);
        };
    });
 });

app.get("/sad.json", function(req, res) {
    redisClient.mget(sadWords, function(error, counts) {
    	if (error !== null) {
            // handle error here                                                                                                                       
            console.log("ERROR: " + error);
        } else {
        	var sad = [];
        	for(var i = 0; i < sadWords.length; i++){
	               sad.push({
	            	   "key" : sadWords[i],
	               	   "counts" : counts[i]
	               }); 
	        };	
	     // use res.json to return JSON objects instead of strings
	        res.json(sad);
        };
    });
 });

app.get("/happyTotal.json", function(req, res) {
    redisClient.mget(happyWords, function(error, counts) {
    	if (error !== null) {
            // handle error here                                                                                                                       
            console.log("ERROR: " + error);
        } else {
        	var happyTotal = [];
        	for(var i = 0; i < happyWords.length; i++){
	               happyTotal.push({
	            	 "counts" : counts[i]
	               }); 
	        };	
	     // use res.json to return JSON objects instead of strings
	        res.json(happyTotal);
        };
    });
 });

app.get("/sadTotal.json", function(req, res) {
    redisClient.mget(sadWords, function(error, counts) {
    	if (error !== null) {
            // handle error here                                                                                                                       
            console.log("ERROR: " + error);
        } else {
        	var sadTotal = [];
        	for(var i = 0; i < sadWords.length; i++){
	               sadTotal.push({
	            	 "counts" : counts[i]
	               }); 
	        };	
	     // use res.json to return JSON objects instead of strings
	        res.json(sadTotal);
        };
    });
 });