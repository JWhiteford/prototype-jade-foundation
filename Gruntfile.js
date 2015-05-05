module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'nested',
          sourceMap: true,
          debugInfo: true
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    jade: {
      options: {
        pretty: true
      },
      compile: {
        files: {
          // "index.html": ["jade/index.jade"],
          'index.html': ['jade/*.jade'],
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      jade: {
        files: '**/*.jade',
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('build', ['sass', 'jade']);
  grunt.registerTask('default', ['build','watch']);
}