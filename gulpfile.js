var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('css:libs', function () {
  return gulp.src([
    'css/normalize.css',
    'css/jquery.html5.placeholder.css',
    'libs/slick/slick.css',
  ])
    .pipe(concat('libs.min.css'))
    .pipe(cleancss())
    .pipe(gulp.dest('s:/host01/design/css_min/'))
});

gulp.task('css:build', function () {
  return gulp.src([
    'css/fonts.css',
    'css/common.css',
    'css/main.css',
    'css/media-992.css',
    'css/media-768.css',
    'css/media-576.css',
    'css/media-450.css',
    'css/media_320.css',
  ])
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss())
    .pipe(gulp.dest('s:/host01/design/css_min/'))
});

gulp.task('js:libs', function () {
  return gulp.src([
    'js/jquery.html5.placeholder.min.js',
    'js/icheck.js',
    'libs/slick/slick.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('s:/host01/design/js_min/'))
});

gulp.task('js:build', function () {
  return gulp.src([
      'js/common.js',
      'js/main.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('s:/host01/design/js_min/'))
});

gulp.task('watch', function () {
  gulp.watch('css/**/*', gulp.series('css:build'));
  gulp.watch('js/**/*', gulp.series('js:build'));
});

gulp.task('default', gulp.series(
  // 'clean',
  gulp.parallel(
    'css:libs',
    'css:build',
    'js:libs',
    'js:build',
    'watch',
)));
