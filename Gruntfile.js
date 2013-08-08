module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            files: ["gruntfile.js", "lib/*.js"]
        },
        watch: {
            files: ["<%= jshint.files %>"],
            tasks: ["jshint"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint']);

};