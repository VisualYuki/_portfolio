const gulp = require("gulp");
const eslint = require("gulp-eslint");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
const concat = require("gulp-concat");

let config = require("./config.js");

module.exports = function script() {
   let src = ["src/js/jquery.min.js","src/js/libs/**/*.js","src/js/custom-plugins/**/*.js", "src/js/common/**/*.js", "src/js/pages/**/*.js"];
   return (
      gulp
         .src(src)
         .pipe(concat("site-main.js"))
         //.pipe(gulpif(process.env.NODE_ENV == "production", eslint()))
         //.pipe(gulpif(process.env.NODE_ENV == "production", eslint.format()))
         //.pipe(gulpif(process.env.NODE_ENV == "production", sourcemaps.init()))
         //.pipe(
         //   gulpif(
         //      process.env.NODE_ENV == "production",
         //      babel({
         //         presets: ["@babel/env"],
         //      })
         //   )
         //)
         //.pipe(gulpif(process.env.NODE_ENV == "production", terser()))
         //.pipe(gulpif(process.env.NODE_ENV == "production", sourcemaps.write()))
         .pipe(gulp.dest(config.out.js))
   );
};
