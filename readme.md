<img src='http://roundedoff.com/wp-content/uploads/2011/04/towelie.jpg' width='300'/>

# Towelie Framework

Towelie is an opinonated modularized development enviroment built around [GruntJS](http://gruntjs.com). On the surface it looks very similar to [Yeoman](http://yeoman.io)(intentionally) because [Yeoman](http://yeoman.io) is pretty awesome. Where Towelie differs in regards to [Yeoman](http://yeoman.io) is that Towelie opts to more closely align itself with Grunt and simply serves as an interface to the underlieing Grunt tasks. In Towelie all grunt tasks are fully configurable by the projects local grunt.js file.

# Integrated Features
* [GruntJS](http://gruntjs.com/)
* [RequireJS](http://requirejs.com)
* [Testem](https://github.com/airportyh/testem)
* [Mocha](http://visionmedia.github.com/mocha/)
* [PhantomJS](http://phantomjs.org/)
* [CoffeeScript](http://coffeescript.org/)
* [SASS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)

# Quickstart

## Install dependencies

There are many ways to install the following dependencies. For brevitys sake I'm going to show how to install them with homebrew but obviously install these how you wish.

### Ruby
[http://www.ruby-lang.org/en/](http://www.ruby-lang.org/en/)

```bash
brew install ruby
```

### Compass
[http://compass-style.org](http://compass-style.org/)

```bash
gem update --system
gem install compass
```

### Node 
[http://nodejs.org/](http://nodejs.org/)

```bash
brew update && brew install node   
```

### PhantomJS
[http://phantomjs.org/](http://phantomjs.org/)

```bash
brew update && brew install phantomjs
```

### Testem
[https://github.com/airportyh/testem](https://github.com/airportyh/testem)

```bash
npm install -g testem 
```

## Install Towelie

```bash
npm install -g towelie 
```

## Setup Project

```bash
mkdir projectName && cd projectName   // create project folder and open it
towelie init                          // create project
towelie run                           // fire up server
```

## Commands

```bash
towelie             // runs server, watcher, coffeescript & sass compiler and tests 
towelie test        // manually runs test suite once
towelie build       // builds site and places in dist folder
```

## Authors
Eric Clifford

## Special Thanks
* [Ben Alman]() creator of Grunt which without Grunt neither Towelie wouldn't be possible
* [Addy Osmani]() a core creator of Yeoman which was very inspirational
* [Paul Irish]() a core creator of Yeoman which was very inspirational

## License 
(The MIT License)

