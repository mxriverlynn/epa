var EPA = require("../lib/epa");

describe("load environment config", function(){

  describe("when environment config folder is specified, with no environment name", function(){
    var env;

    beforeEach(function(){
      var epa = new EPA({
        folder: this.configRoot
      });

      env = epa.buildEnv();
    });

    it("should load from 'development' config", function(){
      expect(env.get("test")).toBe("default dev env");
    });

  });

  describe("when environment config folder is specified, with an environment name", function(){
    var env;

    beforeEach(function(){
      var epa = new EPA({
        folder: this.configRoot,
        environment: "not-default"
      });

      env = epa.buildEnv();
    });

    it("should load from specified environment config", function(){
      expect(env.get("test")).toBe("not default");
    });

  });

});
