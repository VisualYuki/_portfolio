const gulp = require("gulp");
const eslint = require("gulp-eslint");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
const newer = require("gulp-newer");

let isDev = true;
let isProd = !isDev;

const webpack = require("webpack-stream");

let path = require("./config.js");

module.exports = function script() {
   let webConfig = {
      output: {
         filename: "main.min.js",
      },
      module: {
         rules: [
            {
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: "/node_modules/"
            },
         ],
		},
		mode: isDev ? "development" : "production"
	};
	
   return gulp
      .src("src/js/site-main.js")
      .pipe(webpack(webConfig))
      .pipe(gulp.dest("dist/js"));
};

//.pipe(gulpif(isProd, eslint()))
//      .pipe(gulpif(isProd, eslint.format()))
//      .pipe(gulpif(isProd, sourcemaps.init()))
//      .pipe(
//         gulpif(
//            isProd,
//            babel({
//               presets: ["@babel/env"],
//            })
//         )
//      )
//      .pipe(gulpif(isProd, terser()))
//      .pipe(gulpif(isProd, sourcemaps.write()))
//      .pipe(rename({ suffix: ".min" }))
