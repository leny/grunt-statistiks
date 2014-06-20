# grunt-statistiks

![NPM version](http://img.shields.io/npm/v/grunt-statistiks.svg) ![Dependency Status](https://david-dm.org/leny/grunt-statistiks.svg) ![Downloads counter](http://img.shields.io/npm/dm/grunt-statistiks.svg)

> Get statistics about files in project (lines, words, …)

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

### Overview

In your project's Gruntfile, add a section named `statistiks` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  statistiks: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

_(Coming soon)_

### Usage Examples

#### Default Options

In this example, the default options are used to shows the *TODO*, *FIXME* and *NOTE* marks founded in the given files.

```js
grunt.initConfig({
  statistiks: {
    options: {},
    src: [
      'test/*'
    ],
  },
});
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* **2014/06/21** : Project starting
