var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
    root: './',
    port: 8888,
  })
});

gulp.task('sass', function() {
  gulp.src('./sass/kanban.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch(['./sass/*.sass'], ['sass']);
})

gulp.task('default', ['server', 'watch']);
