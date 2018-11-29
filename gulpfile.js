const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');

gulp.task('babel', () => {
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('uglify', (cb) => {
    pump([
        gulp.src('dist/js/*.js'),
        uglify(),
        gulp.dest('dist/js'),
    ],
    cb);
});

gulp.task('cssnano', () => gulp.src('css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css')));

gulp.task('imagemin', () => gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img')));

gulp.task('copyIndex', () => gulp.src('index.html')
    .pipe(gulp.dest('./dist/')));

gulp.task('copyViews', () => gulp.src('views/**/*')
    .pipe(gulp.dest('./dist/views')));

gulp.task('default', gulpSequence(['cssnano', 'imagemin'], 'babel', ['copyIndex', 'copyViews'], 'uglify'));

gulp.watch('js/*.js', (event) => {
    gulpSequence('babel', 'uglify')((err) => {
        if (err) console.log(err);
    });
});
