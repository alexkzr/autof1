var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");
var gutil = require("gulp-util");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require('gulp-plumber');

// Static Server + watching scss/html files
gulp.task("serve", function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch("sass/**/*.sass", ["sass"]).on("change", browserSync.reload);
  gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("compress", function () {
  gulp
    .src("img/**/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest("img-min/"));
});
// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function () {
  return gulp
    .src("sass/*.sass")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 4 versions"],
      cascade: false
    }))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("default", ["sass", "serve", "compress"]);