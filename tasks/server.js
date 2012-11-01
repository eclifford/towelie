var connect = require('connect')
    path    = require('path')
    open    = require('open')

module.exports = function(grunt) {
  grunt.renameTask('server', 'grunt-server');

  grunt.registerTask('server', 'Launch a preview server', function() { 
   // Merge task-specific options with these defaults.
      // var options = this.data.options({
      //   port: 8000,
      //   hostname: 'localhost',
      //   base: '.',
      //   keepalive: true
      // });

      var settings = grunt.config('towelie.server');

      // Connect requires the base path to be absolute.
      var base = path.resolve('app');

      // Sweet, sweet middleware.
      var middleware = [
        // Serve static files.
        connect.static('app'),
        connect.static('temp'),
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
      grunt.log.writeln('Starting static web server on ' + settings.hostname + ':' + settings.port + '.');
      connect.apply(null, middleware).listen(settings.port, settings.hostname);

      open( 'http://' + settings.hostname + ':' + settings.port );
        // if ( opts.open ) {
          
        // }

      // // So many people expect this task to keep alive that I'm adding an option
      // // for it. Running the task explicitly as grunt:keepalive will override any
      // // value stored in the config. Have fun, people.
      // if (this.flags.keepalive || true) {
      //   // This is now an async task. Since we don't store a handle to the "done"
      //   // function, this task will never, ever, ever terminate. Have fun!
      //   this.async();
      //   grunt.log.write('Waiting forever...');
      // }
  });

  // grunt.registerTask('open-browser', function() {
  //   open('http://' + grunt.config('server.hostname'))
  // });
}