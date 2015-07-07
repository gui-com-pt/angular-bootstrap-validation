module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
                concat: {
                    release: {
                        dest: 'dist/angular-bootstrap-validation.js',
                        src: [
                            'src/main.js'
                        ]
                    }
                }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);
};