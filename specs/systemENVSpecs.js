var EPA = require("../lib/epa");

describe("using system env settings", function(){

  describe("when the system has an environment variable set", function(){
    var value;

    beforeEach(function(){
      var epa = new EPA({
        folder: this.configRoot,
        systemEnv: {
          ENV_TEST: true
        }
      });

      var env = epa.buildEnv();
      value = env.get("ENV_TEST");
    });

    it("should allow use of that variable through a get method", function(){
      expect(value).toBe(true);
    });

  });

});
