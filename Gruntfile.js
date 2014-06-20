/*
 * grunt-statistiks
 * https://github.com/leny/grunt-statistiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    coffee: {
      options: {
        bare: true
      },
      task: {
        files: {
          "tasks/statistiks.js": "src/statistiks.coffee"
        }
      }
    },

    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js",
      ],
      options: {
        jshintrc: ".jshintrc",
      }
    },

    // Configuration to be run.
    statistiks: {
      default_options: {
        options: {},
        src: [
          "test/*"
        ]
      },
      custom_options: {
        options: {},
        src: [
          "test/*"
        ],
      },
    },

  });

  // Actually load this plugin"s task(s).
  grunt.loadTasks("tasks");

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  // By default, lint and run todo.
  grunt.registerTask("default", ["coffee", "jshint", "statistiks"]);

};
