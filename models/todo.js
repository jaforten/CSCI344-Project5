var mongoose = require("mongoose"),
    ToDoSchema,
    todo;
    
mongoose.connect("mongodb://localhost/development");

ToDoSchema = new mongoose.Schema({
    "description": String,
    "categories" : [String]
});

todo = mongoose.model("todo", ToDoSchema);

todo.findOne({}, function (err, result) {
    if (err !== null) {
	      console.log(err);
    } else if (result === null) {
	        var t = new todo({
              
               "description":  "vegas",
	             "categories": ["travel","work"]
              
          });

	        t.save(function (err) {
	            if (err !== null) {
		              console.log(err);
	            }
	        });
    }
});

module.exports = todo;
