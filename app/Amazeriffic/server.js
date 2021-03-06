var express = require("express"),
    http = require("http"),
    // import the mongoose library
    mongoose = require("mongoose"),
    app = express();

app.use(express.static(__dirname + "/client"));
app.use(express.bodyParser());

// connect to the amazeriffic data store in mongo
mongoose.connect('mongodb://localhost/amazeriffic');

// This is our mongoose model for todos
var ToDoSchema = mongoose.Schema({
    description: String,
    tags: [ String ]
});

var ToDo = mongoose.model("ToDo", ToDoSchema);

http.createServer(app).listen(3000);

app.get("/todos.json", function (req, res) {
    ToDo.find({}, function (err, toDos) {
	res.json(toDos);
    });
});

app.post("/todos", function (req, res) {
    
    var newToDo = new ToDo({"description":req.body.description,
    						"tags":req.body.tags});
    newToDo.save(function (err, result) {
		console.log(result);
		if (err !== null) {
	    	// the element did not get saved!
	    	console.log(err);
	    	res.json(err);
		} else {
	    	res.json(result);
	    }
    });
};