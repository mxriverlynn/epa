var Environment = require("./environment");

// EPA
// ---

function EPA(options){
  this.options = options || {};
}

// Instance Members
// ----------------

EPA.prototype.buildEnv = function(){
  var config = this._buildConfig(this.options);
  var env = new Environment(config);
  return env;
};

EPA.prototype._buildConfig = function(options){
  var folder = options.folder;
  var envName = options.environment || "development";
  var systemEnv = options.systemEnv || {};

  var envConfig = {
    folder: folder,
    envName: envName,
    systemEnv: systemEnv
  };

  return envConfig;
};

module.exports = EPA;
