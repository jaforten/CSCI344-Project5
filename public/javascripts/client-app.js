

var main = function () {
	
	
    $.getJSON("/happy.json", function (result) {
    	result.forEach(function(display){
    		$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	});
    });
    
    $.getJSON("/sad.json", function (result) {
    	result.forEach(function(display){
    		$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	});
    });
    setInterval(function(){
    	$("p").remove();
    	  $.getJSON("/happy.json", function (result) {
    	    	result.forEach(function(display){
    	    		$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    	});
    	  });
    	    
    	  $.getJSON("/sad.json", function (result) {
    	    	result.forEach(function(display){
    	    		$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    	});
    	  });
    	
	},2000 );
};

$(document).ready(main);