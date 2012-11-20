/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

// Basic template description.
exports.description = 'towelie';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
  'be a unique ID not already in use at search.npmjs.org.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

 grunt.helper('prompt', {}, [
    // Prompt for Project Name
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),
    {
      name: 'app_dir',
      message: 'Choose your application directory',
      default: 'app',
    },
    {
      name: 'staging_dir',
      message: 'Choose your staging directory',
      default: 'temp',
    },
    {
      name: 'test_dir',
      message: 'Choose your testing directory',
      default: 'test',
    },
    {
      name: 'production_dir',
      message: 'Choose your production directory',
      default: 'dist',
    },
    // Use CoffeeScript?
    {
      name: 'coffee',
      message: 'Use CoffeeScript?',
      default: 'Y/n',
    },
    // Use RequireJS?
    {
      name: 'require',
      message: 'Use RequireJS?',
      default: 'Y/n',
    },
    // Use Compass?
    {
      name: 'compass',
      message: 'Use Compass?',
      default: 'Y/n',
    },
    // Include Twitter Bootstrap?
    {
      name: 'bootstrap',
      message: 'Use Twitter Bootstrap?',
      default: 'Y/n',
    },
    {
      name: 'jasmine',
      message: 'Use Jasmine (fallback is Mocha)',
      default: 'Y/n',
    }
  ], function(err, props) {
    props.coffee = /y/i.test(props.coffee);
    props.require = /y/i.test(props.require);
    props.compass = /y/i.test(props.compass);
    props.bootstrap = /y/i.test(props.bootstrap);

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    if(!props.require) {
      delete files['app/scripts/vendor/require.config.js'];
      delete files['app/scripts/vendor/require.js'];
    }

    if(!props.coffee) {
      delete files['app/scripts/main.coffee'];
      delete files['test/specs/example.spec.coffee'];  
    } else {
      delete files['app/scripts/main.js'];
      delete files['test/specs/example.spec.js'];     
    }

    if(!props.compass) {
      delete files['app/styles/app.sass'];
    } else {
      delete files['app/styles/app.css'];
    }

    if(!props.bootstrap) {
      delete files['app/images/glyphicons-halflings-white.png'];
      delete files['app/images/glyphicons-halflings.png'];
      delete files['app/styles/bootstrap.css'];
    }

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};
