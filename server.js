var express = require("express");
const path = require('path');
var app = express();

app.use(express.static(__dirname + '/dist/MyAngularApp'));

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/MyAngularApp/index.html'));
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
var port = server.address().port;
console.log("App now running on port", port);
});