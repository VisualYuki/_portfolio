const gulp = require("gulp");
const gulpPngquant = require("gulp-pngquant");
const newer = require("gulp-newer");

let config = require("../config.js");

module.exports = function min_png() {
   return gulp
      .src(config.src.png)
      //.pipe(newer(config.out.minImg))
      .pipe(
         gulpPngquant({
            quality: "65-75",
         })
      )
      .pipe(gulp.dest(config.out.minImg));
};
