var fs = require("fs");
var extend = require("./extend");
var path = require("path");

// EPA
// ---

function EPA(options){
  this.options = options || {};
  this.epaConfig = this.buildConfig();
}

// Instance Members
// ----------------

EPA.prototype.buildConfig = function(){
  var folder = this.options.folder;
  var envName = this.options.environment || "development";

  var envConfig = {
    folder: folder,
    envName: envName
  };

  return envConfig;
};

EPA.prototype.buildEnv = function(){
  var sharedEnv = this.loadEnvFile("shared");
  var env = this.loadEnvFile(this.epaConfig.envName);

  var envConfig = extend({}, sharedEnv, env);

  return envConfig;
};

EPA.prototype.loadEnvFile = function(envName){
  var env;

  var folder = this.epaConfig.folder;
  var envFile = path.resolve(folder, envName, "config.json");

  var exists = fs.existsSync(envFile);
  if (exists){
    env = require(envFile);
  } else {
    env = {};
  }

  return env;
};

module.exports = EPA;
