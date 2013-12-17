
var fs     = require('fs');
var extend = require('extend');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

var config = {
  port: 3000 || process.env.PORT,
  registry: {
    vhost: 'registry.*',
    npm: {
      hostname: 'registry.npmjs.org',
      port: 443,
      protocol: 'https'
    }
  },
  www: {
    vhost: '*'
  }
};

if(fs.existsSync(__dirname + '/config.user.js')) {
  var userConfig = fs.readFileSync(__dirname + '/config.user.js', 'utf8');
  config = extend(config, userConfig, true);
}

module.exports = config;