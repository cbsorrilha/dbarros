'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['_site'],
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },
        browserify: {
            dist: {
                files: {
                    'js/bundle.js': [
                        'js/main.js',
                        'js/modules/**/*.js'
                    ]
                }
            }
        },
        uglify: {
            // vendor: {
            //  files: {
            //      '_site/js/vendor.min.js': [
            //          'bower_components/jquery/dist/jquery.js',
            //          'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'
            //      ]
            //  }
            // },
            custom: {
                files: {
                    '_site/js/custom.min.js': [
                        'js/bundle.js'
                    ]
                }
            }

        },
        watch: {
            sass: {
                files: ['_sass/**/*.{scss, sass}'],
                tasks: ['sass:serve']
            },
            browserify: {
                files: ['js/*.js', 'js/**/*.js', '!bundle.js'],
                tasks: ['browserify']
            },
            uglify: {
                files: ['js/bundle.js'],
                tasks: ['uglify:custom']
            }
        },
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'compressed',
                sassDir: '_sass',
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand:true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            },
            serve: {
                options: {
                    outputStyle: 'expanded',
                },
                files: [{
                    expand:true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        },
         browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '_site/css/*.css',
                        '_site/js/*.js',
                        '_site/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '_site'
                }
            }
        },
        concurrent: {
            serve: [
                'sass:serve',
                'browserify',
                'uglify',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        }
        // This is where our tasks are defined and configured
    });

    grunt.registerTask('serve', [
        'clean',
        'browserSync',
        'concurrent:serve'
    ]);

    grunt.registerTask('build', [
        'clean',
        'shell:jekyllBuild',
        'sass:build',
        'browserify',
        'uglify'
    ]);

    grunt.registerTask('default', 'build');

};