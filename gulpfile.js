'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


gulp.task('template', function () {
    return gulp.src(['./app/**/*.jade', '!./app/shared/**/*.jade'])
        .pipe(changed('./public'))
        .pipe(jade({
            pretty: true
        }))
        .on('error', notify.onError())
        .pipe(gulp.dest('./public'))
});

gulp.task('styles', function () {
    return gulp.src('./app/**/*.scss')
        .pipe(changed('./public/css'))
        .pipe(sass())
        .on('error', notify.onError())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public/css'))
});

gulp.task('scripts', function () {
    return gulp.src(['./app/**/*.js'])
        .pipe(changed('./public'))
        .on('error', notify.onError())
        .pipe(gulp.dest('./public'))
});

gulp.task('assets', function () {
    return gulp.src(['./app/assets/**/*.*'])
        .pipe(changed('./public/css'))
        .on('error', notify.onError())
        .pipe(gulp.dest('./public/assets'))
});

gulp.task('build', gulp.series('template', 'styles', 'scripts', 'assets'));

gulp.task('watch', function () {
    gulp.watch('./app/**/*.jade', gulp.series('template'));
    gulp.watch('./app/**/*.scss', gulp.series('styles'));
    gulp.watch('./app/**/*.js', gulp.series('scripts'));
    gulp.watch('./app/assets/**/*.*', gulp.series('assets'));
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });

    gulp.watch('./public/**/*.*').on('change', browserSync.reload)
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));