const gulp  = require('gulp');
// const watch = require('gulp-watch');
const merge = require('gulp-merge-json');
const json5 = require('gulp-json5-to-json');

gulp.task('default', () => { });

gulp.task('compile-viml', () => {
  gulp.src('./src/syntax/viml/*.json5')
    .pipe(merge({
      fileName: "viml.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('compile-snips', () => {
  gulp.src('./src/syntax/ultisnips/*.json5')
    .pipe(merge({
      fileName: "snippets.tmLanguage.json",
      json5: true,
    }))
    .pipe(json5({
      beautify: true,
    }))
    .pipe(gulp.dest('./syntaxes'));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.json5', [ 'compile-viml', 'compile-snips' ]);
});
