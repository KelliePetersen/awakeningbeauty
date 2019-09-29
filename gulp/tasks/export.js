const gulp = require('gulp'),
      zip = require('gulp-zip'),
      del = require('del');

gulp.task('deleteZIP', () => del('./docs.zip'));

gulp.task('createZIP', (done) => {
  gulp.src('docs/**')
    .pipe(zip('docs.zip'))
    .pipe(gulp.dest('./'));
    done();
});

gulp.task('export', gulp.series('deleteZIP', 'createZIP'));