var express = require('express');
var request = require('request');
var app = express();
var host = 'https://blokweb.org/stories/';

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function(req, res) {
  res.redirect('/stories');
});

app.get('/stories', function(req, res) {
  request(host, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('index.ejs', { stories: data });
  });
});

app.get('/stories/:id', function(req, res) {
  request(host + req.params.id, function(error, response, body) {
    var data = JSON.parse(body);
    res.render('detail.ejs', { story: data });
  });
});

var server = app.listen(1337, function() {
  console.log('server is running on port 1337');
});
