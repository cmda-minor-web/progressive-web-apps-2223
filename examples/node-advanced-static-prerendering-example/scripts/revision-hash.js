const gulp = require('gulp');
const filter = require('gulp-filter');
const rev = require('gulp-rev');
const override = require('gulp-rev-css-url');

gulp.src([
  `./dist/**/*.{css,js}`,
])
  .pipe(filter(file => !file.path.endsWith('/service-worker.js')))
  .pipe(rev())
  .pipe(override())
  .pipe(gulp.dest(`./dist/`))
  .pipe(rev.manifest('rev-manifest.json'))
  .pipe(gulp.dest(`./dist/`));
