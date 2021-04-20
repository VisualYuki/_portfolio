//const imagemin = require("gulp-imagemin");
//const webpPlugin = require("imagemin-webp");
//const extReplace = require("gulp-ext-replace");
//const gulpPngquant = require("gulp-pngquant");
const gulp = require("gulp");
const gulpWebp = require("gulp-webp");
const newer = require("gulp-newer");

let config = require("../config.js");

module.exports = function imgWebp() {

   return gulp.src(config.src.webp,{since: gulp.lastRun(imgWebp)}).pipe(newer(config.out.webpImg)).pipe(gulpWebp()).pipe(gulp.dest(config.out.webpImg));
};
