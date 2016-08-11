var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('client'));
app.use(express.static('dev'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(8080, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost/' + port);
});