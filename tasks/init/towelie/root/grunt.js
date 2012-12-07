module.exports = function( grunt ) {

  // Towelie Tasks
  grunt.registerTask('build', 'Build site', 'clean:dist {%= coffee ? "coffee" : "" %} {%= compass ? "compass" : "" %} copy:dist {%= require ? "requirejs:js requirejs:css" : "" %}');
  grunt.registerTask('run', 'Activate watchers and server', 'clean:temp {%= coffee ? "coffee" : "" %} compass connect open-browser watch');
  grunt.registerTask('test', 'Run TAP tests once', 'clean:temp {%= coffee ? "coffee" : "" %} {%= compass ? "compass" : "" %} testem');

  //
  // Grunt configuration:
  //
  // https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
  //
  grunt.initConfig({
    //
    // towelie configuration
    // setup towelie configuration to be used by grunt tasks below
    //
    towelie: {
      paths: {
        staging: "{%= staging_dir %}",
        production: "{%= production_dir %}",
        dev: "{%= app_dir %}",
        test: "{%= test_dir %}"
      },
      server: {
        hostname: "localhost",
        port: "3501"
      }
    },
    //
    // grunt-contrib-connect
    // http://github.com/gruntjs/grunt-contrib-connect
    //
    connect: {
      port: '<config:towelie.server.port>',
      hostname: '<config:towelie.server.hostname>',
      dev: '<config:towelie.paths.dev>',
      staging: '<config:towelie.paths.staging>',
      middleware: function(connect, options) {
        return [
          connect.static(options.dev),
          connect.static(options.staging),
          connect.directory(options.dev)
        ];
      }
    },
    //
    // grunt-watch
    //
    watch: {
      {% if (coffee) { %}
      coffee: {
        files: '<%= towelie.paths.dev %>/scripts/**/*.coffee',
        tasks: 'coffee:app'
      },
      {% } %}
      {% if (compass) { %}
      compass: {
        files: [
          '<%= towelie.paths.dev %>/styles/**/*.{scss,sass}'
        ],
        tasks: 'compass:dev'
      },
      {% } %}
      {% if (coffee) { %}
      tests: {
        files: [
          '<%= towelie.paths.test %>/specs/**/*.coffee'
        ],
        tasks: 'coffee:tests'
      }
      {% } %}
    },
    {% if (coffee) { %}
    //
    // grunt-contrib-coffee
    // https://github.com/gruntjs/grunt-contrib-coffee/
    //
    coffee: {
      app: {
        files: {
          '<%= towelie.paths.staging %>/scripts/*.js': '<%= towelie.paths.dev %>/scripts/**/*.coffee'
        },
        options: {
          basePath: '<%= towelie.paths.dev %>/scripts'
        }
      },
      tests: {
        files: {
          '<%= towelie.paths.staging %>/specs/*.js': '<%= towelie.paths.test %>/specs/**/*.coffee'
        },
        options: {
          basePath: '<%= towelie.paths.test %>/specs'
        }
      }
    },
    {% } %}
    {% if (compass) { %}
    //
    // grunt-compass
    // https://github.com/kahlil/grunt-compass
    //
    compass: {
      dev: {
        src: '<%= towelie.paths.dev %>/styles',
        dest: '<%= towelie.paths.staging %>/styles',
        linecomments: true,
        forcecompile: true,
        require: [
        ],
        debugsass: true,
        images: '<%= towelie.paths.dev %>/images',
        relativeassets: true
      }
    },
    {% } %}
    //
    // grunt-testem
    // https://github.com/sideroad/grunt-testem
    //
    testem: { 
      options: {
        files: [
          "test/index.html"
        ],
        routes: {
          "/scripts/vendor": "app/scripts/vendor",
          "/scripts": "temp/scripts",
          "/styles": "temp/styles",
          "/specs": "temp/specs",
          "/templates": "app/templates"
        },
        launch_in_ci: [
          "phantomjs"
        ],
        src_files: [
          "app/templates/**/*.tmpl",
          "temp/scripts/**/*.js"
        ],
        serve_files: [
          "temp/specs/**/*.js"
        ]
      }
    },
    {% if (require) { %}
    //
    // grunt-contrib-requirejs
    // https://github.com/gruntjs/grunt-contrib-requirejs
    //
    requirejs: {
      js: {
        options: {
          optimize: 'none',
          baseUrl: './',
          wrap: true,
          name: 'scripts/main',
          out: '../<%= towelie.paths.production %>/scripts/app.js',
          mainConfigFile: 'scripts/main.js'
        }
      },
      css: {
        options: {
          baseUrl: './',
          cssIn: "styles/main.css",
          out: "../<%= towelie.paths.production %>/styles/app.css"
        }
      }
    },
    {% } %}
    //
    // grunt-contrib-copy
    // https://github.com/gruntjs/grunt-contrib-copy
    //
    copy: {
      dist: {
        files: {
          "<%= towelie.paths.production %>/templates/": "<%= towelie.paths.dev %>/templates/**",
          "<%= towelie.paths.production %>/images/": "<%= towelie.paths.dev %>/images/**",
          "<%= towelie.paths.production %>/data/": "<%= towelie.paths.dev %>/data/**",
          "<%= towelie.paths.production %>/": "<%= towelie.paths.dev %>/*"
        }
      }
    },
    //
    // grunt-contrib-clean
    // https://github.com/gruntjs/grunt-contrib-clean
    //
    clean: {
      temp: ['<%= towelie.paths.staging %>/'],
      dist: ['<%= towelie.paths.production %>/']
    }
  });
};
