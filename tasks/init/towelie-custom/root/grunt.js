module.exports = function( grunt ) {

  // Towelie Tasks
  grunt.registerTask('build', 'clean:dist {%= coffee ? "coffee" : "" %} {%= compass ? "compass" : "" %} copy:dist {%= require ? "requirejs:js requirejs:css" : "" %}');
  grunt.registerTask('default', 'clean:temp {%= coffee ? "coffee" : "" %} compass server watch');
  grunt.registerTask('test', 'clean:temp {%= coffee ? "coffee" : "" %} {%= compass ? "compass" : "" %} testem');

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
        port: "8000"
      }
    },
    //
    // grunt-contrib-connect
    // https://github.com/gruntjs/grunt-contrib-connect
    //
    // connect: {
    //   options: {
    //     // Example usage
    //     middleware: function(connect, options) {
    //       // Return array of whatever middlewares you want
    //       return [
    //         connect.static('app/scripts', '/scripts'),
    //         connect.static('app/styles', 'styles')
    //       ];
    //     }
    //   }
    // },
    //
    // grunt-contrib-watch
    // https://github.com/gruntjs/grunt-contrib-watch
    //
    watch: {
      {% if (coffee) { %}
      coffee: {
        files: '<%= towelie.paths.dev %>/scripts/**/*.coffee',
        tasks: 'coffee:app testem'
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
        tasks: 'coffee:tests testem'
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
        src: "app/styles",
        dest: "temp/styles",
        linecomments: true,
        forcecompile: true,
        require: [
        ],
        debugsass: true,
        images: 'app/images',
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
        browsers: [
          "phantomjs"
        ],
        src_files: [
          "app/templates/**/*.tmpl",
          "temp/scripts/**/*.js",
          "test/specs/**/*.coffee"
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
