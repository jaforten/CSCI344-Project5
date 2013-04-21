var todo = require("../models/todo.js"),
    ToDoController = {};
    
ToDoController.list = function (req, res) {
    todo.find({}, function (err, todo) {
	      if (err !== null) {
	          console.log(err);
	      } else {
	            res.json(todo);
	      }
    });
};

ToDoController.create = function (req, res) {
    var t = new todo({
	      
        "description":req.body.description,
	      "categories":req.body.categories
        
    });

    t.save(function (err, result) {
	      if (err !== null) {
	      //send the error
	      } else {
	          res.json(result);
	  }
});
};

ToDoController.destroy = function (req, res) {
    todo.findOne({"description":req.body.description}, function (err, removeButton) {
	      if (err !== null) {
	        //handle err
	      } else if (todo === null) {
	          //todo not found
	      } else {
	          todo.remove(function (err) {
		            if (err !== null) {
		                //handle err
		            }
	          });
	      }
    });
};

module.exports = ToDoController;