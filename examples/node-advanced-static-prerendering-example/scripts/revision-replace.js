const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

gulp.src([
  './dist/service-worker.js',
])
  .pipe(revReplace({
    manifest: gulp.src('./dist/rev-manifest.json')
  }))
  .pipe(gulp.dest('./dist'));
