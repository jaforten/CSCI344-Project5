var todo = require("../models/todo.js"),
	ToDoController = {};
ToDoController.list = function (req, res){
	"use strict";
	todo.find({}, function (err, todo){
		if(err !== null){
			console.log(err);
		}else{
			res.json(todo);
		}
	});
};

ToDoController.create = function (req, res){
	"use strict";
	var t = new todo({
		"description":req.body.description,
		"categories":req.body.categories
	});
	t.save(function(err, result){
		if(err !== null){
			console.log(err);          
		}else{
			res.json(result);
		}
	});
};

ToDoController.destroy = function(req, res){
	"use strict";
	todo.findOne({"description":req.body.description, 
		"categories":req.body.categories}, function(err){
			if(err !== null){
				console.log(err);
			}else if(todo === null){	
				console.log("todo not found");        
			}else{
				todo.remove(function (err){
					console.log(res);                  
					if(err !== null){
						console.log(err);
					}
				});
			}
	});
};

module.exports = ToDoController;