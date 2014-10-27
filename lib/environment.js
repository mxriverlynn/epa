var fs = require("fs");
var path = require("path");
var _ = require("underscore");

// Environment object
// ------------------

function Environment(config){
  this._systemEnv = config.systemEnv;
  this.name = config.envName;
  this.configRoot = config.folder;

  var sharedConfig = this.loadEnvFile(config.folder, "shared");
  var envConfig = this.loadEnvFile(config.folder, config.envName);

  var o = Object.create(null);
  this._config = _.extend(o, sharedConfig, envConfig);
}

// Instance Methods
// ----------------

Environment.prototype.get = function(name){
  var configValue = this._config[name];
  var envValue = this._systemEnv[name];

  return (configValue || envValue);
};

Environment.prototype.loadEnvFile = function(folder, envName){
  var env;

  var envFile = path.resolve(folder, envName, "config.json");

  var exists = fs.existsSync(envFile);
  if (exists){
    env = require(envFile);
  } else {
    env = {};
  }

  return env;
};

module.exports = Environment;
