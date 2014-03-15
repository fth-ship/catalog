function configHandler(env) {
  var path = require('path');
  var configFileName = ['./', env].join('');
  var configFile = require(configFileName);

  return configFile;
}
module.exports = exports = configHandler;
