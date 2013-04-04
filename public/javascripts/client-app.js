

var main = function () {
	
	
    $.getJSON("/happy.json", function (happyCount) {
    	happyCount.forEach(function(display){
    		$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	});
    });
    
    $.getJSON("/sad.json", function (sadCount) {
    	sadCount.forEach(function(display){
    		$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	});
    });
    
    $.getJSON("/happyTotal.json", function (happyTotal) {
		totalAry = [];
	    total = 0;
	    happyTotal.forEach(function(totalCount){
	    	totalAry.push(totalCount.counts);
	    });
	    for(var i = 0; i < totalAry.length; i++){
	    	n = parseInt(totalAry[i], 10);
	    	if(!isNaN(n)){
	    		total += n;
	    	};
	    };
	    $("body").append("<p>" + "Happy Total:" + " " + total  + "</p>");
	 });
    
    
    $.getJSON("/sadTotal.json", function (sadTotal) {
		totalAry = [];
	    total = 0;
	    sadTotal.forEach(function(totalCount){
	    	totalAry.push(totalCount.counts);
	    });
	    for(var i = 0; i < totalAry.length; i++){
	    	n = parseInt(totalAry[i], 10);
	    	if(!isNaN(n)){
	    		total += n;
	    	};
	    };
	    $("body").append("<p>" + "sad Total:" + " " + total  + "</p>");
	});
    
    setInterval(function(){
    	$("p").remove();
    	  $.getJSON("/happy.json", function (result) {
    	    	result.forEach(function(display){
    	    		$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    	});
    	  });
    },2000 );	    
    	  
    setInterval(function(){
    	$.getJSON("/sad.json", function (result) {
    		result.forEach(function(display){
    			$("body").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    });
    	});
    },2000 );		  
    	  
    setInterval(function(){
    	 $.getJSON("/happyTotal.json", function (happyTotal) {
    			totalAry = [];
    		    total = 0;
    		    happyTotal.forEach(function(totalCount){
    		    	totalAry.push(totalCount.counts);
    		    });
    		    for(var i = 0; i < totalAry.length; i++){
    		    	n = parseInt(totalAry[i], 10);
    		    	if(!isNaN(n)){
    		    		total += n;
    		    	};
    		    };
    		    $("body").append("<p>" + "Happy Total:" + " " + total  + "</p>");
    		 });
    },2000 );


    setInterval(function(){
    	$.getJSON("/sadTotal.json", function (sadTotal) {
    		totalAry = [];
		    total = 0;
		    sadTotal.forEach(function(totalCount){
		    	totalAry.push(totalCount.counts);
		    });
		    for(var i = 0; i < totalAry.length; i++){
		    	n = parseInt(totalAry[i], 10);
		    	if(!isNaN(n)){
		    		total += n;
		    	};
		    };
		    $("body").append("<p>" + "Sad Total:" + " " + total  + "</p>");
    	});
    },2000 );
};

$(document).ready(main);