'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const cleanCSS = require('gulp-clean-css');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

gulp.task('sass', () => {
  return gulp.src('./src/scss/app.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('amp', () => {
  return gulp.src('./src/scss/amp.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(cleanCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('lint', () => {
  return gulp.src([
    './src/js/components/_formspree.js',
    './src/js/components/_infiniteScroll.js',
    './src/js/components/_miscellaneous.js',
    './src/js/components/_pageTransition.js',
    './kit/js/_inits.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('browserify', () => {
  return browserify('./src/js/app.js')
  .transform('babelify', {presets: ['env']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('build', ['sass', 'amp', 'browserify']);

gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', ['sass', 'amp']);
  gulp.watch('./src/js/**/*.js', ['browserify']);
});

gulp.task('default', ['build', 'watch']);
