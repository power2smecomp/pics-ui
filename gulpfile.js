/* 
 * This file is property of Power2SME pvt. ltd. 
 @author(developer) : Himanshu Shekhar (himanshushekhar002@gmail.com)
 * This file is gulp file. Changes should be done cautiously
 */
var gulp = require("gulp"); // Load gulp
var uglify = require('gulp-uglify');
var minify = require('gulp-minify'); //for js
var cssmin = require('gulp-cssmin'); //for css
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

/**
 * Run this below tasks in order.
 */

/**
 * Run This task first.
 */
gulp.task('template-to-js', function() {
    return gulp.src([
        'public_html/components/chatui/subviews/*.html',
        'public_html/components/chatui/*.html'])
    .pipe(templateCache('templates.js',{
        standalone : true  
    }))
    .pipe(gulp.dest('dist/'));
});

/**
 * Run This task second.
 */
gulp.task('minify-js', function() {
    return gulp.src([
        'public_html/chatapp.js',
        'public_html/filters/chatui_filters.js',
        'public_html/directives/chatui_directives.js',
        'public_html/apiservices/chatapiservices.js',
        'public_html/components/chatui/chat_controller.js',
        'dist/templates.js'
    ])
        .pipe(concat('pics.js'))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        })
                .on('error', function (e) {
                    console.log(e);
                })
                )
        .pipe(gulp.dest('dist/'));
});

/**
 * Run This task third.
 */
gulp.task('minify-css', function() {
    return gulp.src([
        'public_html/assets/css/customchat.css'
    ])
    .pipe(cssmin())
    .pipe(rename({suffix: '.min', basename : 'pics'}))
    .pipe(gulp.dest('dist'));
})

/**
 * Run This task last.
 */
gulp.task('copy-dist-to-public', function() {
    return gulp.src(['dist/**/*']).pipe(gulp.dest('public_html/dist/'));
});