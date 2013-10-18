module.exports = function(grunt) {

    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Compass
        compass: {
            build: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css',
                    outputStyle: 'compressed'
                }
            }
        },

        // Cleaning
        clean: {
            pre: ['styleguide', 'assets/css'],
            post: ['.sass-cache']
        },

        // Sassdown (Styleguide)
        sassdown: {
            options: {
                template_assets: 'src/styleguide/assets',
                template_html: 'src/styleguide/template.hbs',
                css_output: 'assets/css/screen.css'
            },
            files: {
                expand: true,
                cwd: 'assets/sass/partials',
                src: ['**/*.scss'],
                dest: 'styleguide/'
            }
        }

    });

    // Load NPM Tasks
    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Register Grunt tasks
    grunt.registerTask('default', ['clean:pre', 'compass', 'sassdown', 'clean:post']);
  
};