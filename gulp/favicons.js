let gulp = require("gulp");
let config = require("./config.js");

module.exports = function favicons() {
   return gulp.src(config.src.favicons).pipe(gulp.dest(config.out.favicons));
};
