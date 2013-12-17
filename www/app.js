
var express = require('express');
var app     = express();

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
})

app.get('/', function(req, res) {
  res.render('home');
});


module.exports.app = app;