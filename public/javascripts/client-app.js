

var main = function () {
	
	
    $.getJSON("/counts.json", function (response) {
    	response.forEach(function(display){
        $("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	});
    });
    setInterval(function(){
    	$("p").remove();
    	$.getJSON("/counts.json", function (response) {
        	response.forEach(function(display){
            $("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
        	});
    	});
	},5000 );
};

$(document).ready(main);