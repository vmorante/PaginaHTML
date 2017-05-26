module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take.
    require('time-grunt')(grunt);
    var appConfig = {
        hostname: '0.0.0.0',
        dist: 'dist',
        app: 'app',
        port: grunt.option('port') || 9000,
        livereloadPort: 55555
    };
    grunt.initConfig({
        appConfig: appConfig,
        connect: {
            options: {
                port: appConfig.port,
                hostname: '<%= appConfig.hostname %>', // underscore
                livereload: appConfig.livereloadPort
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp', '.', 'app']
                }
            },
            dist: {
                options: {
                    open: true,
                    base: ['.tmp', 'dist']
                }
            }
        },
        watch: {
            sass: {
                files: [
                    '<%= appConfig.app %>/styles/**/*.{scss,sass}'
                ],
                tasks: ['sass', 'autoprefixer']
            },
            jshint: {
                files: [
                    '<%= appConfig.app %>/**/*.js'
                ],
                tasks: ['jshint']
            },
            livereload: {
                options: {
                    livereload: '<%= appConfig.livereloadPort %>'
                },
                files: [
                    '<%= appConfig.app %>/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        wiredep: {
            app: {
                src: [
                    '<%= appConfig.app %>/index.html'
                ],
                ignorePath: /\.\.\//
            },
            sass: {
                src: ['<%= appConfig.app %>/styles/{,*/}*.{scss,sass}']
            }
        },
        includeSource: {
            options: {
                basePath: ['<%= appConfig.app %>', '.tmp'],
                baseUrl: '',
            },
            server: {
                files: {
                    '.tmp/index.html': '<%= appConfig.app %>/index.html'
                }
            },
            dist: {
                files: {
                    '<%= appConfig.dist %>/index.html': '<%= appConfig.app %>/index.html'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= appConfig.app %>/**/*.js'
                ]
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['styles/main.scss'],
                    dest: '.tmp',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 10 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.sass-cache',
                        '.tmp',
                        '<%= appConfig.dist %>'
                    ]
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= appConfig.app %>',
                    dest: '<%= appConfig.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        'assets/**/*',
                        'fonts/*',
                        '**/*.js'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= appConfig.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '.tmp',
                    dest: '<%= appConfig.dist %>',
                    src: [
                        '*.html',
                        'styles/**/*.css'
                    ]
                }]
            }
        },
        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= appConfig.dist %>/{,**/}*.js',
                    '<%= appConfig.dist %>/styles/{,*/}*.css',
                    '<%= appConfig.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= appConfig.dist %>/styles/fonts/*'
                ]
            }
        },
    });
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', [
        'wiredep',
        'sass',
        'autoprefixer',
        'includeSource:server',
        'copy:dist'
    ]);
    grunt.registerTask('serve', [
        'build',
        'connect:livereload',
        'watch'
    ]);
    // default task
    grunt.registerTask('default', [
        'clean',
        'test',
        'serve'
    ]);
};