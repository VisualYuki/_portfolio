const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps");
const shorthand = require("gulp-shorthand");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const gulpif = require("gulp-if");
const newer = require("gulp-newer");
const notify = require("gulp-notify");
const gulpStylelint = require("gulp-stylelint");
const gcmq = require("gulp-group-css-media-queries");
const lessGlob = require("gulp-less-glob");
const ccso = require("gulp-csso");

let config = require("./config.js");

module.exports = function style() {
   return (
      gulp
         //.src(config.src.less, { since: gulp.lastRun(style) })
         .src(config.src.less)
         .pipe(newer(config.out.css))
         .pipe(plumber())
         .pipe(
            gulpStylelint({
               failAfterError: false,
               reporters: [
                  {
                     formatter: "string",
                     console: true,
                  },
               ],
            })
         )
         //.pipe(sourcemaps.init())
         .pipe(lessGlob())
         .pipe(less({
				javascriptEnabled: true
			}))
         //.pipe(gulpif(process.env.NODE_ENV == "production", autoprefixer()))
         //.pipe(autoprefixer())
         .pipe(gulpif(process.env.NODE_ENV == "production", shorthand()))
         .pipe(
            gulpif(
               process.env.NODE_ENV == "production",
               cleanCSS(
                  {
                     level: 2,
                  },
                  (details) => {
                     console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`);
                  }
               )
            )
         )
         .pipe(gulpif(process.env.NODE_ENV == "production", gcmq()))
         //.pipe(gulpif(config.isDev, sourcemaps.write()))
         .pipe(gulpif(process.env.NODE_ENV == "production", ccso()))
         .pipe(gulp.dest(config.out.css))
   );
};
