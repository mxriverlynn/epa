var path = require("path");

var EPA = require("./lib/epa");
var extend = require("./lib/extend");

var configFolder = path.resolve(process.cwd(), "env");

var epa = new EPA({
  folder: configFolder,
  environment: process.env.NODE_ENV
});

var env = epa.buildEnv();

module.exports = extend({EPA: EPA}, env);
