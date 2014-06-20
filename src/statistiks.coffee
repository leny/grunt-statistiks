###
 * grunt-statistiks
 * https://github.com/leny/grunt-statistiks
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

chalk = require "chalk"
table = require "text-table"

module.exports = ( grunt ) ->

    grunt.registerMultiTask "statistiks", "Get statistics about files in project (lines, characters, …)", ->
        oOptions = @options
            countEmptyLines: no
            trimLines: yes

        iFoldersCount = 0
        iFilesCount = 0
        iLinesCount = 0
        iCharsCount = 0

        @filesSrc
            .forEach ( sFilePath ) ->
                return unless grunt.file.exists sFilePath
                if grunt.file.isDir sFilePath
                    ++iFoldersCount
                    return
                if grunt.file.isFile sFilePath
                    ++iFilesCount
                    grunt.file
                        .read sFilePath
                        .split /\r*\n/
                        .map ( sLine ) ->
                            return if oOptions.countEmptyLines is no and sLine.trim().length is 0
                            ++iLinesCount
                            iCharsCount += if oOptions.trimLines then sLine.trim().length else sLine.length

        grunt.log.write "#{ iFoldersCount } folder#{ if iFoldersCount > 1 then 's' else '' }, "
        grunt.log.write "#{ iFilesCount } file#{ if iFilesCount > 1 then 's' else '' }, "
        grunt.log.write "#{ iLinesCount } line#{ if iLinesCount > 1 then 's' else '' }, "
        grunt.log.write "#{ iCharsCount } character#{ if iCharsCount > 1 then 's' else '' }"
