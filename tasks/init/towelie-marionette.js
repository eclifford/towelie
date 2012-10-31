/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

// Basic template description.
exports.description = 'towelie marionette';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
  'be a unique ID not already in use at search.npmjs.org.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

 grunt.helper('prompt', {}, [
    // Prompt for these values.
    {
      name: 'dom',
      message: 'Is the sky falling?',
      default: 'Y/n',
      warning: 'Yes: QUnit unit tests + JSHint "browser" globals. No: Nodeunit unit tests.'
    }
  ], function(err, props) {
    props.dom = /y/i.test(props.dom);
    // props.min_concat = /y/i.test(props.min_concat);
    // props.package_json = /y/i.test(props.package_json);
    // props.test_task = props.dom ? 'qunit' : 'test';
    // props.file_name = props.package_json ? '<%= pkg.name %>' : 'FILE_NAME';

    // // Find the first `preferred` item existing in `arr`.
    // function prefer(arr, preferred) {
    //   for (var i = 0; i < preferred.length; i++) {
    //     if (arr.indexOf(preferred[i]) !== -1) {
    //       return preferred[i];
    //     }
    //   }
    //   return preferred[0];
    // }

    // // Guess at some directories, if they exist.
    // var dirs = grunt.file.expandDirs('*').map(function(d) { return d.slice(0, -1); });
    // props.lib_dir = prefer(dirs, ['lib', 'src']);
    // props.test_dir = prefer(dirs, ['test', 'tests', 'unit', 'spec']);

    // // Maybe this should be extended to support more libraries. Patches welcome!
    // props.jquery = grunt.file.expandFiles('**/jquery*.js').length > 0;

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};
