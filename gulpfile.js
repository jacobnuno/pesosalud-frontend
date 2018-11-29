const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

gulp.task('babel', () => {
 gulp.src('js/*.js')
.pipe(babel({
   "presets": ["env"]
}))
.pipe(gulp.dest('dist/js'));
 });

gulp.task('uglify', function (cb) {
  pump([
        gulp.src('dist/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('cssnano', function () {
    return gulp.src('css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('default', ['babel', 'cssnano', 'imagemin', 'uglify']);
