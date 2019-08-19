/* eslint-disable */
// 引入 gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// gulp 的任務
// SASS
gulp.task('sass', () => {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // CSS 壓縮
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./public/css'));
});

// Babel
gulp.task('babel', () => 
  gulp.src('./source/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    // JavaScript 壓縮
    .pipe(uglify())
    .pipe(gulp.dest('./public/js')),
);

// 合併任務
gulp.task('default', ['sass', 'babel']);
