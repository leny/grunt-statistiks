
/*
 * grunt-statistiks
 * https://github.com/leny/grunt-statistiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var chalk, table;

chalk = require("chalk");

table = require("text-table");

module.exports = function(grunt) {
  return grunt.registerMultiTask("statistiks", "Get statistics about files in project (lines, words, …)", function() {
    return grunt.log.writeln("Coming soon: statistiks task.");
  });
};
