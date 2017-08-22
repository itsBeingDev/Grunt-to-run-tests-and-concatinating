module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/**/*.js"],
                "dest": "concat/result/output.js"
            }
        },

        jasmine: {
            src: 'js/**/*.js',
            options: {
                specs: 'spec/**/*.js'
            }
        }



    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Task definitions
    grunt.registerTask('default', ['jasmine', 'concat']);
    grunt.registerTask('test', ['jasmine']);
};