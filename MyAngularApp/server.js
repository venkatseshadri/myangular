var express = require("express");
var bodyParser = require("path");

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());


// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
console.log("App now running on port", port);
});

// CONTACTS API ROUTES BELOW