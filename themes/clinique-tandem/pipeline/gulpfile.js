//GULP STARTER (modified from @dope's project of the same name)
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const imagefull = 1600;
const imagehalf = 1200;
const imagequart = 600
const imagemin = require("gulp-imagemin");
const imageresize = require('gulp-image-resize');
const imagethumb = 80;
const os = require("os");
const parallel = require("concurrent-transform");
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const prefix = require('gulp-autoprefixer');
const pump = require('pump');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const sassfiles = "./scss/**/*.scss";
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
// const execcli = require('execcli');

/**
 *
 * Styles
 * - Compile
 * - Compress/Minify
 * - Catch errors (gulp-plumber)
 * - Autoprefixer
 *
 **/
gulp.task('sass', function() {
  gulp.src(sassfiles)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefix('last 2 versions', '> 1%', 'ie 10', 'Android 2', 'Firefox ESR'))
    .pipe(plumber())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('../static/assets/css'));
});

gulp.task("image-resize", () => {
  return gulp.src("../source-images/*.{jpg,png,jpeg,gif}")
    .pipe(imagemin())
    .pipe(parallel(
      imageresize({ width: imagefull }),
      os.cpus().length
    ))
    .pipe(gulp.dest("../static/assets/images"))
    .pipe(parallel(
      imageresize({ width: imagehalf }),
      os.cpus().length
    ))
    .pipe(gulp.dest("../static/assets/images/_half"))
    .pipe(parallel(
      imageresize({ width: imagequart }),
      os.cpus().length
    ))
    .pipe(gulp.dest("../static/assets/images/_quart"))
    .pipe(parallel(
      imageresize({ width: imagethumb }),
      os.cpus().length
    ))
    .pipe(gulp.dest("../static/assets/images/_thumb"));
});


/**Javascript **/

gulp.task('scripts', function(cb) {
  pump([
      // gulp.src(['js/polyfills.js', 'js/utils.js', 'js/_velocity.min.js','js/_velocity.ui.min.js', 'js/scripts/*.js']),
      gulp.src(['js/utils.js', 'js/scripts/*.js', 'js/main.js']),
      // sourcemaps.init(),
      babel({
        presets: ['es2015']
      }),
      concat('script.min.js'),
      // sourcemaps.write('.'),
      uglify(),
      gulp.dest('../static/assets/js/')
    ],
    cb
  );
});
// gulp.task('hugo', ['sass', 'scripts', 'image-resize'], function() {
//   execcli('hugo');
// });

/**
 *
 * Default task
 * - Runs sass, scripts, and image tasks
 * - Watchs for file changes for images, scripts and sass/css
 *
 **/
gulp.task('default', ['sass', 'scripts', 'image-resize'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('../source-images/*', ['image-resize']);
});
