const gulp = require("gulp");
const newer = require("gulp-newer");

let config = require("./config.js");

module.exports = function font() {
   return gulp
      .src(config.src.fonts, { since: gulp.lastRun(font) })
      .pipe(newer(config.out.fonts))
      .pipe(gulp.dest(config.out.fonts));
};
