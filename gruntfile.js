module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc",
      },
      lib: "lib/**/*.js",
      specs: "lib/**/*.js"
    },

    jasmine_node: {
      options: {
        forceExit: true,
        match: ".",
        matchall: false,
        extensions: "js",
        specNameMatcher: "[Ss]pecs",
        useHelpers: true,
        helperNameMatcher: "[Hh]elper[s]",
        jUnit: {
          report: false
        }
      },
      all: ["specs/"]
    },

    watch: {
      specs: {
        files: "specs/**/*.js",
        tasks: ["specs"]
      },

      lib: {
        files: "lib/**/*.js",
        tasks: ["specs"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-jasmine-node");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("specs", ["jshint", "jasmine_node"]);
  grunt.registerTask("default", ["watch"]);
};
