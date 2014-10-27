var path = require("path");
var _ = require("underscore");
var EPA = require("./lib/epa");

function buildEnv(){
  var configFolder = path.resolve(process.cwd(), "env");
  var environmentName = process.env.NODE_ENV || "development";

  var epa = new EPA({
    folder: configFolder,
    environment: environmentName,
    systemEnv: process.env
  });

  var env = epa.buildEnv();
  return env;
}

module.exports = {
  EPA: EPA,
  getEnvironment: function(){
    if (!this._env){
      this._env = buildEnv();
    }
    return this._env;
  }
};
