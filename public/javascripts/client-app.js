

var main = function () {
	"use strict";
	
    $.getJSON("/happy.json", function (happyCount) {
    	happyCount.forEach(function(display){
    		$(".happy").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	});
    });
    
    $.getJSON("/sad.json", function (sadCount) {
    	sadCount.forEach(function(display){
    		$(".sad").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	});
    });
    
    setInterval(function(){
    	$(".happy p").remove();
    	  $.getJSON("/happy.json", function (result) {
    	    	result.forEach(function(display){
    	    		$(".happy").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    	});
    	  });
 
    	$.getJSON("/sad.json", function (result) {
    		$(".sad p").remove();
    		result.forEach(function(display){
    			$(".sad").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    });
    	});
    },10000);		  
    	  

    setInterval(function(){	
    	$.getJSON("/happyTotal.json", function (happyTotal) {
    		var totalAry = [];
    		var n = 0;
    	    window.totalForHappy = 0;
    	    
    		happyTotal.forEach(function(totalCount){
    			totalAry.push(totalCount.counts);
    		});
    		for(var i = 0; i < totalAry.length; i++){
    			n = parseInt(totalAry[i], 10);
    		    if(!isNaN(n)){
    		    	window.totalForHappy += n;
    		    };
    		};
        });
    },10000);
    
    setInterval(function(){	
       $.getJSON("/sadTotal.json", function (sadTotal) {
    	   var totalAry = [];
    	   window.totalForSad = 0;
    	   var n = 0;
    		sadTotal.forEach(function(totalCount){
    			totalAry.push(totalCount.counts);
		    });
		    for(var i = 0; i <totalAry.length; i++){;
		    	n = parseInt(totalAry[i], 10);
		    	if(!isNaN(n)){
		    		window.totalForSad += n;
		    		console.log(window.totalForSad);
		    	};
		    };
		    happyOrSad();
		 });
    },2000);	
  
 
    	function happyOrSad(){
    		if (window.totalForHappy > window.totalForSad){
    			$('.feelingSad').hide('slow');
    			$('.feelingHappy').show('slow');
    		} else {
    			$('.feelingHappy').hide('slow');
    			$('.feelingSad').show('slow');
    		} 
    	};	
    	
};

$(document).ready(main);