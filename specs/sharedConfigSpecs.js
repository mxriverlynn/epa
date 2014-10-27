var EPA = require("../lib/epa");

describe("shared environment config", function(){

  describe("when a 'shared' environment folder exists, with a config.json file", function(){
    var env;

    beforeEach(function(){
      var epa = new EPA({
        folder: this.configRoot
      });

      env = epa.buildEnv();
    });

    it("should load from 'shared' config for any environment", function(){
      expect(env.get("shared")).toBe(true);
    });

  });

  describe("when env and shared both have setting of same name", function(){
    var env;

    beforeEach(function(){
      var epa = new EPA({
        folder: this.configRoot
      });

      env = epa.buildEnv();
    });

    it("should use the env specific setting", function(){
      expect(env.get("sameSetting")).toBe("override from environment");
    });

  });

});
