var http = require("http"),
	express = require("express"),
    path = require("path"),
    app = express(),
    tdc;
// Load Controllers
tdc = require("./controllers/todo_controller.js");
// This is our basic configuration                                                                                                                     
app.configure(function () {
    "use strict";
    // Define our static file directory, it will be 'public'                                                                                           
    app.use(express.static(path.join(__dirname, 'public')));
    // This allows us to parse the post requests data
    app.use(express.bodyParser());
});
// Create the http server and get it to                                                                                                                
// listen on the specified port 3000                                                                                                                   
http.createServer(app).listen(3000, function(){
	"use strict";
  console.log("Express server listening on port 3000");
});

app.get("/todo.json", tdc.list);
app.post("/todo/new", tdc.create);
app.post("/people/delete", tdc.destroy);