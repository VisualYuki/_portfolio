const gulp = require("gulp");
const pug = require("gulp-pug");
const htmlValidator = require("gulp-w3c-html-validator");
const pugLinter = require("gulp-pug-linter");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const pugLintStylish = require("puglint-stylish");
const prettier = require("gulp-prettier");
const gulpif = require("gulp-if");
const formatHtml = require("gulp-format-html");

let config = require("./config.js");

module.exports = function pug2html() {
   return (
      gulp
         .src(config.src.pug, { since: gulp.lastRun(pug2html) })
         .pipe(newer(config.out.html))
         .pipe(plumber())
         //.pipe(pugLinter({ reporter: pugLintStylish }))
         .pipe(
            pug({
               pretty: true,
            })
         )
         .pipe(formatHtml({
            "indent_size": 3
         }))
         //.pipe(prettier({
         //   tabWidth: 3,
         //   //printWidth: 200,
         //   useTabs: true,
         //}))
         //.pipe(htmlValidator())
         .pipe(gulp.dest(config.out.html))
   );
};
