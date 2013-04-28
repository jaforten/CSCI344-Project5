var mongoose = require("mongoose"),
	ToDoSchema,
	todo;
    
mongoose.connect("mongodb://localhost/development");

ToDoSchema = new mongoose.Schema({
	"description": String,
	"categories" : [String]
});

todo = mongoose.model("todo", ToDoSchema);

todo.findOne({}, function(err, result){
    //"use strict";
    if(err !== null){
		  console.log(err);
    }else if(result === null){
		  var d = new todo({
			  "description": "buy coffee",
			  "categories":[
				  "shopping",
				  "groceries"
			  ]
		  });
		  var e = new todo({
        "description": "reserve hotel for denver trip",
        "categories":[
           "travel",
           "work"
        ]
		  });
		  var f = new todo({ 
			  "description": "get plane ticket for denver trip",
			  "categories":[
				  "travel",
				  "work"
			  ]
		  });
		  var g = new todo({
			  "description": "take dog to vet",
			  "categories":[
				  "home",
				  "family"
			  ]
		  });
      
		  var h = new todo({
        "description": "launch million dollar startup idea (todo app)",
        "categories":[
          "work"
        ]
		  });
      
		  var i = new todo({
			  "description": "grade web programming quizzes",
			  "categories":[
				  "work"
			  ]
		  });

		  d.save(function (err){
			  if (err !== null){
				  console.log(err);
			  }
		  });

		  e.save(function(err){
			  if(err !== null){
				  console.log(err);
			  }
		  });
          
		  f.save(function(err){
			  if(err !== null){
				  console.log(err);
			  }
		  });
          
		  g.save(function(err){
			  if(err !== null){
				  console.log(err);
			  }
		  });
           
		  h.save(function(err){
			  if(err !== null){
				  console.log(err);
			  }
		  });
          
		  i.save(function(err){
			  if(err !== null){
				  console.log(err);
			  }
		  });
    }
});

module.exports = todo;