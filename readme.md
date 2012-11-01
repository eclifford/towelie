<img src='http://roundedoff.com/wp-content/uploads/2011/04/towelie.jpg' width='300'/>

# Towelie Framework

Towelie is an opinonated modularized development enviroment build around [GruntJS](http://gruntjs.com). On the surface it looks very similar to [Yeoman](http://yeoman.io)(intentionally) because [Yeoman](http://yeoman.io) is pretty awesome. Where Towelie differs in regards to [Yeoman](http://yeoman.io) is that Towelie opts to more closely align itself with Grunt and simply serves as an interface to the underlieing Grunt tasks. In Towelie all grunt tasks are fully configurable by the projects local grunt.js file.

# Integrated Features
* [GruntJS](http://gruntjs.com/)
* [RequireJS](http://requirejs.com)
* [Testem](https://github.com/airportyh/testem)
* [Mocha](http://visionmedia.github.com/mocha/)
* [PhantomJS](http://phantomjs.org/)
* [CoffeeScript](http://coffeescript.org/)
* [SASS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)
* [JAM](http://jamjs.org/)
* [Backbone Marionette](https://github.com/marionettejs/backbone.marionette)

# Quickstart

## Install dependencies
* [Compass](http://compass-style.org/)
* [Node](http://nodejs.org/)
* [PhantomJS](http://phantomjs.org/)

## Install Towelie

```bash
npm install -g towelie 
```

## Setup example project template

```bash
towelie init:towelie-marionette      // install marionette template 
towelie                              // fire up the project
```

# Commands

```bash
towelie             // runs server, watcher, coffeescript & sass compiler and tests 
towelie test        // manually runs test suite once
towelie build       // builds site and places in dist folder
towelie install *   // executes jam install * to install a clientside library 
towelie search *    // executes jam search * to search for a clientside library
towelie list        // lists jam clientside artifacts
towelie upgrade *   // executes jam upgrade * to upgrade a clientside library
```

## Authors
Eric Clifford

## Special Thanks
* [Ben Alman]() creator of Grunt which without Grunt neither Towelie wouldn't be possible
* [Addy Osmani]() a core creator of Yeoman which was very inspirational
* [Paul Irish]() a core creator of Yeoman which was very inspirational

## License 
(The MIT License)

