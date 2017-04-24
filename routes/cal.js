var express = require("express");
var router = express.Router();

router.get("/add/:x/:y", function(req, resp) {
	var x = req.params.x * 1;  // convert string to number
	var y = req.params.y * 1;
	setTimeout(function() {
		resp.end("" + (x + y));    // convert number to string
	}, 1000);
});

router.get("/multiply/:x/:y", function(req, resp) {
	var x = req.params.x * 1;
	var y = req.params.y * 1;
	//resp.end("" + x * y);  // multiply has priority
	setTimeout(function() {
		resp.end("" + x * y);    // convert number to string
	}, 1500);
});

router.post("/add", function(req, resp) {
	var x = req.body.x * 1;  // request -> body
	var y = req.body.y * 1;
	setTimeout(function() {
		resp.end("" + (x + y));
	}, 1000);
});

router.post("/multiply", function(req, resp) {
	var x = req.body.x * 1;
	var y = req.body.y * 1;
	setTimeout(function() {
		resp.end("" + x * y);
	}, 1500);
});

router.get("/test", function(req, resp) {
	var x = req.query.x * 1;     // url?x=1&y=1
	var y = req.query.y * 1;
	resp.end("" + (x + y));
})

module.exports = router;