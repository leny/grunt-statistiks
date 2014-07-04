
/*
 * grunt-statistiks
 * https://github.com/leny/grunt-statistiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var chalk, spinner, table;

chalk = require("chalk");

table = require("text-table");

(spinner = require("simple-spinner")).change_sequence(["◓", "◑", "◒", "◐"]);

module.exports = function(grunt) {
  return grunt.registerMultiTask("statistiks", "Get statistics about files in project (lines, characters, …)", function() {
    var iCharsCount, iFilesCount, iFoldersCount, iLinesCount, oOptions;
    spinner.start(50);
    oOptions = this.options({
      countEmptyLines: false,
      trimLines: true,
      countFolders: false
    });
    iFoldersCount = 0;
    iFilesCount = 0;
    iLinesCount = 0;
    iCharsCount = 0;
    this.filesSrc.forEach(function(sFilePath) {
      if (!grunt.file.exists(sFilePath)) {
        return;
      }
      if (oOptions.countFolders && grunt.file.isDir(sFilePath)) {
        ++iFoldersCount;
        return;
      }
      if (grunt.file.isFile(sFilePath)) {
        ++iFilesCount;
        return grunt.file.read(sFilePath).split(/\r*\n/).map(function(sLine) {
          if (oOptions.countEmptyLines === false && sLine.trim().length === 0) {
            return;
          }
          ++iLinesCount;
          return iCharsCount += oOptions.trimLines ? sLine.trim().length : sLine.length;
        });
      }
    });
    spinner.stop();
    if (oOptions.countFolders) {
      grunt.log.write("" + iFoldersCount + " folder" + (iFoldersCount > 1 ? 's' : '') + ", ");
    }
    grunt.log.write("" + iFilesCount + " file" + (iFilesCount > 1 ? 's' : '') + ", ");
    grunt.log.write("" + iLinesCount + " line" + (iLinesCount > 1 ? 's' : '') + ", ");
    return grunt.log.write("" + iCharsCount + " character" + (iCharsCount > 1 ? 's' : ''));
  });
};
