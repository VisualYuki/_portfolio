const gulp = require("gulp");
const newer = require("gulp-newer");

let config = require("./config.js");

module.exports = function includeLibs() {
   return gulp
      .src(config.src.includeScripts)
      
      .pipe(gulp.dest(config.out.includeScripts));
};
