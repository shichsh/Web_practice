var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cal = require("./routes/cal");
var ds = require("./routes/dataservice");

app.use(express.static(__dirname + "/public"));	// Set the folder accessible
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/cal", cal);
app.use("/ds", ds)

app.get("/:filename", function(req, resp) {
	var filename = req.params.filename;
	resp.sendFile(__dirname + "/public/"+ filename +".html");
});

app.listen(3000);

console.log("Server started!");
