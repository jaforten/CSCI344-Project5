

var main = function () {
	
	
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
    
    $.getJSON("/happyTotal.json", function (happyTotal) {
		totalAry = [];
	    totalForHappy = 0;
	    happyTotal.forEach(function(totalCount){
	    	totalAry.push(totalCount.counts);
	    });
	    for(var i = 0; i < totalAry.length; i++){
	    	n = parseInt(totalAry[i], 10);
	    	if(!isNaN(n)){
	    		totalForHappy += n;
	    	};
	    };
	    $(".happy").append("<p>" + "Happy Total:" + " " + totalForHappy  + "</p>");
	 });
    
    
    $.getJSON("/sadTotal.json", function (sadTotal) {
		totalAry = [];
	    totalForSad = 0;
	    sadTotal.forEach(function(totalCount){
	    	totalAry.push(totalCount.counts);
	    });
	    for(var i = 0; i < totalAry.length; i++){
	    	n = parseInt(totalAry[i], 10);
	    	if(!isNaN(n)){
	    		totalForSad += n;
	    	};
	    };
	    $(".sad").append("<p>" + "sad Total:" + " " + totalForSad  + "</p>");
	});
    
    setInterval(function(){
    	$("p").remove();
    	  $.getJSON("/happy.json", function (result) {
    	    	result.forEach(function(display){
    	    		$(".happy").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    	});
    	  });
    },2000 );	    
    	  
    setInterval(function(){
    	$.getJSON("/sad.json", function (result) {
    		result.forEach(function(display){
    			$(".sad").append("<p>" + display.key + ":" + " " + display.counts  + "</p>");
    	    });
    	});
    },2000 );		  
    	  

    setInterval(function(){	
    	$.getJSON("/happyTotal.json", function (happyTotal) {
    		totalAry = [];
    	    totalForHappy = 0;
    		happyTotal.forEach(function(totalCount){
    			totalAry.push(totalCount.counts);
    		});
    		for(var i = 0; i < totalAry.length; i++){
    			n = parseInt(totalAry[i], 10);
    		    if(!isNaN(n)){
    		    	window.totalForHappy += n;
    		    };
    		};
    		$(".happy").append("<p>" + "Happy Total:" + " " + totalForHappy  + "</p>");
    		
    	 });
    },2000 );
 	 
    setInterval(function(){	
    	 $.getJSON("/sadTotal.json", function (sadTotal) {
    		 totalAry = [];
    	     totalForSad = 0;
    		 sadTotal.forEach(function(totalCount){
		    	 totalAry.push(totalCount.counts);
		     });
		     for(var i = 0; i < totalAry.length; i++){
		    	 n = parseInt(totalAry[i], 10);
		    	 if(!isNaN(n)){
		    		window.totalForSad += n;
		    	 };
		    };
		    happyOrSad();
		     $(".sad").append("<p>" + "Sad Total:" + " " + totalForSad  + "</p>");
		
    	 });
    },2000 );	
  
 
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