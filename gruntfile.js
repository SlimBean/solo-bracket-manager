module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uncss: {
			dist: {
				src: ['src/index.html', 'src/index.html'],
			    dest: 'dist/css/tidy.css',
			    options: {
			    	report: 'min' // optional: include to report savings
			    }
			}
		}
	});

	//load
	grunt.loadNpmTasks('grunt-uncss');
	
	//tasks
	grunt.registerTask('default',['uncss']);
	grunt.registerTask('build', function() {

	});


}