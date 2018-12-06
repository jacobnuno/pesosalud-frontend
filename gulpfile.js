const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');

gulp.task('babel', () => {
  gulp.src('app/js/**/*.js')
    .pipe(babel({
       presets: ['@babel/preset-env'],
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('uglify', (cb) => {
  pump([
    gulp.src('public/js/**/*.js'),
    uglify(),
    gulp.dest('public/js'),
  ],
  cb);
});

// gulp.task('build', () => browserify({ entries: 'app/js/**/*.js', debug: true })
//   .transform('babelify', { presets: ['es2015'] })
//   .bundle()
//   // Output file
//   .pipe(source('index.js'))
//   .pipe(buffer())
//   // .pipe(sourcemaps.init())
//   .pipe(uglify())
//   // .pipe(sourcemaps.write('./maps'))
//   .pipe(gulp.dest('./dist')));

gulp.task('cssnano', () => gulp.src('app/css/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('public/css')));

gulp.task('imagemin', () => gulp.src('app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('public/img')));

gulp.task('copyIndex', () => gulp.src('app/index.html')
  .pipe(gulp.dest('public/')));

gulp.task('copyViews', () => gulp.src('app/views/**/*')
  .pipe(gulp.dest('public/views')));

gulp.task('default', gulpSequence(['cssnano', 'imagemin'], 'babel', ['copyIndex', 'copyViews']));

// gulp.watch('js/**/*.js', () => {
//     gulpSequence('babel', 'uglify')((err) => {
//         if (err) console.log(err);
//     });
// });
