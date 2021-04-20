const gulp = require("gulp");
const svgmin = require("gulp-svgmin");
const newer = require("gulp-newer");

let config = require("../config.js");

module.exports = function svg() {
   return gulp.src(config.src.svg).pipe(svgmin()).pipe(gulp.dest(config.out.svg));
};
