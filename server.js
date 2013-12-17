
var config   = require('./config');
var express  = require('express');
var http     = require('http');
var proxy    = express();
var server   = http.createServer(proxy);

proxy.use(express.vhost(config.registry.vhost, require('./registry/app').app));
proxy.use(express.vhost(config.www.vhost     , require('./www/app').app));

server.listen(config.port, function(err) {
  console.log('Listening on port ' + config.port);
});