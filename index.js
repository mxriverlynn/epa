var path = require("path");

var EPA = require("./epa");
var extend = require("./extend");

var configFolder = path.resolve(process.cwd(), "env");

var epa = new EPA({
  folder: configFolder
});

var env = epa.buildEnv();

module.exports = extend({EPA: EPA}, env);
