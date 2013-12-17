
var express = require('express');
var request = require('request');
var config  = require('../config');
var url     = require('url');
var extend  = require('extend');
var app     = express();

app.use(function(req, res, next) {
  console.log(req.url);
  if(req.url.match(/\:/)) {
    return next();
  }
  request(url.format(extend(config.registry.npm, {
    path: req.url,
    method: req.method
  }))).pipe(res);
})

app.get('/:module', function(req, res) {
  if(req.url.match(/:/)) {
    res.send('A GitHub Module');
  } else {
    res.send('A npm Module');
  }
});

app.get('/:module/:version', function() {
  if(req.url.match(/:/)) {
    res.send('A GitHub Module');
  } else {
    res.send('A npm Module');
  }
});


module.exports.app = app;