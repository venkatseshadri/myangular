var express = require("express");
var bodyParser = require("path");

var app = express();
app.use(express.static(__dirname + '/dist'));

const path = require('path');


// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
console.log("App now running on port", port);
});

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});