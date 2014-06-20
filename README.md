# grunt-statistiks

![NPM version](http://img.shields.io/npm/v/grunt-statistiks.svg) ![Dependency Status](https://david-dm.org/leny/grunt-statistiks.svg) ![Downloads counter](http://img.shields.io/npm/dm/grunt-statistiks.svg)

> Get statistics about files in project (lines, characters, …)

* * *

## Getting Started

This plugin requires Grunt `~0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-statistiks --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-statistiks');
```

## The "statistiks" task

In your project's Gruntfile, add a section named `statistiks` to the data object passed into `grunt.initConfig()`.

### Minimal usage

The minimal usage of **grunt-statistics** will returns you the count of folders, files, non-empty lines and characters (from trimmed lines).

```js
statistiks: {
  src: [
    'test/*'
  ]
}
```

### Usage with all available options

```js
statistiks: {
  options: {
    countEmptyLines: false,
    trimLines: true
  },
  src: [
    'test/*'
  ]
}
```

#### Options

##### countEmptyLines
Type: `Boolean`  
Default: `false`  

Set to `true` to count empty lines in total lines count.

##### trimLines
Type: `Boolean`  
Default: `true`  

By default, all *non-empty* lines are trimmed before characters counting. Set to `false` to avoid trim.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* **2014/06/21** : 0.1.0 (first release)

### TODO

* [ ] Add an option to reject binary files from counting
* [ ] Add an option to reject comment from code-files

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.
