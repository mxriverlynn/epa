var path = require("path");
var EPA = require("../index");

describe("default Environment instance", function(){

  describe("when asking for the default instance of the environment", function(){
    var env;

    beforeEach(function(){
      process.env.foo = "bar";
      env = EPA.getEnvironment();
    });

    it("should include the current process.env variables", function(){
      expect(env.get("foo")).toBe("bar");
    });

    it("should work from the process.cwd to load config files", function(){
      var envFolder = path.resolve(process.cwd(), "env");
      expect(env.configRoot).toBe(envFolder);
    });

    it("should cache the environment for subsequent calls to retrieve it", function(){
      expect(EPA.getEnvironment()).toBe(env);
    });

  });

});
