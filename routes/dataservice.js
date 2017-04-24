var express = require("express");
var router = express.Router();

var person = {
	records: [
		{name: "Alice", city: "Princeton", country: "USA"},
		{name: "Steven", city: "Berlin", country: "Germany"},
		{name: "Bob", city: "Tokyo", country: "Japan"},
		{name: "Linda", city: "Beijing", country: "China"},
		{name: "Alex", city: "Paris", country: "France"},
		{name: "Frank", city: "London", country: "UK"},
		{name: "Tommy", city: "Shanghai", country: "China"}
	]
};

router.get("/", function(req, resp) {
	resp.json(person.records);
});

router.get("/:index", function(req, resp) {
	var index = req.params.index;
	resp.json(person.records[index]);
});

router.post("/", function(req, resp) {
	person.records.push(req.body);
	resp.json(person.records);
});

module.exports = router;
