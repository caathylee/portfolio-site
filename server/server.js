var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('client'));
app.use(express.static('dev'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/resume', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/portfolio', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/web', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/socialmedia', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/print', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.get('/codingprojects', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});


var server = app.listen(process.env.PORT ||8080, function () {
  var port = server.address().port;

  console.log('Example app listening at http://localhost/' + port);
});