var connect = require('connect')
    path    = require('path')
    open    = require('open')

module.exports = function(grunt) {
  grunt.renameTask('server', 'grunt-server');

  grunt.registerTask('server', 'Launch a preview server', function() { 
      var settings = grunt.config('towelie');

      // Connect requires the base path to be absolute.
      var base = path.resolve('app');

      // Sweet, sweet middleware.
      var middleware = [
        // Serve static files.
        connect.static(settings.paths.dev),
        connect.static(settings.paths.staging),
        // Make empty directories browsable. (overkill?)
        connect.directory('app')
      ];

      // If --debug was specified, enable logging.
      if (grunt.option('debug')) {
        connect.logger.format('grunt', ('[D] server :method :url :status ' +
          ':res[content-length] - :response-time ms').magenta);
        middleware.unshift(connect.logger('grunt'));
      }

      // Start server.
      grunt.log.writeln('Starting static web server on ' + settings.server.hostname + ':' + settings.server.port + '.');
      connect.apply(null, middleware).listen(settings.server.port);
  });

  grunt.registerTask('open-browser', function() {
    open('http://' + grunt.config('towelie.server.hostname') + ':' + grunt.config('towelie.server.port'))
  });
}