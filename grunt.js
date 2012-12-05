'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        lint:{
            files: ["grunt.js", "bin/towelie", "tasks/init/towelie.js"]
        },

        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                node:true
            },
            globals:{
                exports:true
            }
        }
    });

    // Load local tasks.
    grunt.loadTasks("tasks");

    // Default task.
    grunt.registerTask("default", "lint");

};