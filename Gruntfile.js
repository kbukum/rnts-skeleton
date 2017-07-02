const tsConfig = require("./tsconfig.json");

module.exports = function (grunt) {
    grunt.initConfig({
        sync: {
            libFiles: {
                files: [{
                    cwd: "src",
                    src: ['**', "!**/*.ts", "!**/*.tsx"],
                    dest: "./build",
                }],
                verbose: true,
                pretend: false,
                failOnError: true,
                compareUsing: "md5"
            },
            assetFiles: {
                files: [{
                    cwd: "assets",
                    src: ["**"],
                    dest: "./build",
                }],
                verbose: true,
                pretend: false,
                failOnError: true,
                compareUsing: "md5"
            }
        }, // sync
        watch: {
            copyFiles: {
                cwd: "src" ,
                files: ['src/**', "!src/**/*.ts", "!src/**/*.tsx"],
                tasks: ['sync']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');

    grunt.registerTask('sync:dev', 'watch');
    grunt.registerTask('sync:prod', ['sync']);
};
