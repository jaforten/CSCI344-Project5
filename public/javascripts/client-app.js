var main = function(){
	'use strict';
	var description,
		  categories,
		  categorizeTab,
		  setUpClickHandler,
		  setUpClickHandlerCat,
		  post_object,
		  cat;
	
	setUpClickHandler = function(anchor){
		anchor.click(function(){
			var target = $(this).attr("href");
			$(".active").removeClass("active");
			$(this).addClass("active");
			$("#" + target).addClass("active");
			return false;
		}); 
	};
	
	//click for: categorize tab
	categorizeTab = function() {
		//categorize click
		setUpClickHandlerCat = function(cat){
			cat.click(function(){
				setUpClickHandlerCat($(".category .tab"));
			});
		};
	};
	
  setUpClickHandler($(".tabs .tab"));   
	
  var addToDoToList = function(todo){
		//all tab content:
		$("<li id = 'descript'>" + "<button id= 'remove'>" + "x" + "</button>" + "<font size= 6, color= blue>" + todo.description + "</font>"  + 
			"  " + "<font size= 4, color= red>" + todo.categories + "</font>"  + "</li>").appendTo(" #all ul");
		$("<li id = 'cats'>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + todo.categories + 
			"<br>" + "<font size= 4, color= black>" + todo.description + "</font>" + "</li>").appendTo("#categorize");
	};
	
  $.getJSON("/todo.json", function(response){
		response.forEach(function(todo){
			console.log(todo);
			addToDoToList(todo);
			//above is the call to the function that places todo in dom
		});
	});
	
  $(".submit").click(function(){
		description = $("#description").val(),
		categories = $("#categories").val().replace(",", ""),
		post_object = ({ 
			description: description,
			categories: [categories]
		});
		if(description === "" || categories === ""){
			alert("hey! you gotta put in an age and a name");
		}else {
			post_object.description = description;
			post_object.categories = categories;
			console.log(post_object);
			$.post("/todo/new", post_object, function(response){
				addToDoToList(response);
				$("#description").val("");
				$("#categories").val("");
			});
		}
	});    
	
  $('.input').keypress(function(e){
		if(e.which === 13){
			description = $("#description").val(),
			categories = $("#categories").val().replace(",", ""),
			post_object = ({ 
				description: description,
				categories: [cat]
			});
			if(description === "" || categories === ""){
				alert("hey! you gotta put in an age and a name");
			} else {
				post_object.description = description;
				post_object.categories = categories;
				console.log(post_object);
				$.post("/todo/new", post_object, function (enterKeyInput){
					addToDoToList(enterKeyInput);
					$("#description").val("");
					$("#categories").val("");
				});
			} 
	  }
  });
	
  $(document).on('click', "#remove", function(){
		var currentRemove = $(this).parent("li").fadeToggle("slow", function(){
			$(this).parent("li").remove();
		});
		$.post("/people/delete", currentRemove.destroy, function(){
			console.log("");
    });
		return false;
	});
};
$(document).ready(main);

