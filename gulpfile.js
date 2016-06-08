'use strict';

// Load plugins
const gulp = require('gulp');
const clean = require('gulp-clean');
const zip = require('gulp-zip');
const react = require('gulp-react');

let getYYYYMMDDHHMM = () => {
    let toXX = (input) => ((input < 10) ? ('0' + input) : input);

    let date = new Date();
    return `${date.getFullYear()}${toXX(date.getMonth() + 1)}${toXX(date.getDate())}${toXX(date.getHours())}${toXX(date.getMinutes())}`;
};

// 复制必要的文件
gulp.task('copyBower', ['clean'], ()=> {
    return gulp.src([
        //all
        'bower_components/**/*'
    ], {"base": "."})
        .pipe(gulp.dest('dist/'));
});

// 复制必要的文件
gulp.task('copy', ['clean', 'copyBower'], ()=> {
    return gulp.src([
        'manifest.json',
        'html/*',
        'js/**/*',
        'css/*',
        //'bower_components/**/',
        'img/*'
    ], {"base": "."})
        .pipe(gulp.dest('dist/'));
});


// Clean
gulp.task('clean', () => {
    return gulp.src([
        'dist/',
        'releases/'
    ], {read: false})
        .pipe(clean());
});

// zip
gulp.task('zip', ['clean', 'copy'], ()=> {
    return gulp.src('dist/**/*', {"base": "."})
        .pipe(zip('quico-' + getYYYYMMDDHHMM() + '.zip'))
        .pipe(gulp.dest('releases'));
});


// Build
gulp.task('build', ['clean', 'copy', 'zip', 'jsx']);

// Default
gulp.task('default', ['watch']);

//jsx
gulp.task('jsx', ['clean', 'copy'], () => {
    return gulp.src('js/app.js')
        .pipe(react())
        .pipe(gulp.dest('dist/js'));
});

// Watch
gulp.task('watch', ['build'], () => {
    gulp.watch([
        //项目依赖单个文件
        'manifest.json',
        'gulpfile.js',

        //应用逻辑
        'css/**/*',
        'html/**/*',
        'img/**/*',
        'js/**/*',

        //依赖库
        'bower_components/**/*',
    ], ['build']);
});