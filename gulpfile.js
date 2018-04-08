const gulp = require('gulp');
const stripJsonComments = require('gulp-strip-json-comments');
const gulpWatch = require('gulp-watch');

gulp.task('default', () =>
    gulp.src('./src/viml.tmLanguage.json')
        .pipe(stripJsonComments())
        .pipe(gulp.dest('syntaxes'))
);
