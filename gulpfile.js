docs// var gulp  = require('gulp'),
//     gutil = require('gulp-util');
//
// create a default task and just log a message
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('src/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('css', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('docs/assets/stylesheets'));
});

gulp.task('html', function() {
  return gulp.src('src/html/*.html')
    .pipe(gulp.dest('docs'));
});

gulp.task('docs', ['html', 'css']);


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('src/javascript/**/*.js', ['jshint']);
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/html/*.html', ['html']);
});
