var fs    = require('fs');
var join  = require('path').join;

module.exports = function(grunt) {
  var grunt_plugins = [
    "grunt-contrib-coffee",
    "grunt-contrib-clean",
    "grunt-contrib-copy",
    "grunt-contrib-requirejs",
    "grunt-testem",
    "grunt-compass"
  ];

  // Let's load all the pass through tasks 
  for (var i = 0; i < grunt_plugins.length; i++) {
    grunt.loadTasks(join(__dirname, '../node_modules/' + grunt_plugins[i] + '/tasks'));
  }
}