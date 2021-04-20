let gulp = require("gulp");
const font = require("./gulp/fonts");
const pug2html = require("./gulp/pug2html");
const clean = require("./gulp/clean");
const style = require("./gulp/style");
const webp = require("./gulp/img/img_webp");
const svg = require("./gulp/img/img_svg");
const minPng = require("./gulp/img/min_png");
const minJpg = require("./gulp/img/min_jpg");
const serve = require("./gulp/serve");
const script = require("./gulp/script");
const favicons = require("./gulp/favicons");
const svgSprite = require("./gulp/svgSprite");
const includeLibs = require("./gulp/include-libs");
const includeScripts = require("./gulp/include-scrips");

//MAIN TASK
const build = gulp.parallel(pug2html, style, script, font, svg, minPng, minJpg, favicons, webp, includeLibs, includeScripts);
gulp.task("build", gulp.series(clean, build));
gulp.task("dev", gulp.series(build, serve));

//SINGLE TASK
gulp.task("script", script);
gulp.task("style", style);

gulp.task("minJpg", minJpg);
gulp.task("minPng", minPng);
gulp.task("serve", serve);
gulp.task("pug2html", pug2html);
gulp.task("webp", webp);
gulp.task("favicons", favicons);
gulp.task("svgSprite", svgSprite);
gulp.task("font", font);
gulp.task("clean", clean);
gulp.task("svg", svg);
gulp.task("includeLibs", includeLibs);

gulp.task("getLibs", gulp.series(getJsLibs, getCssLibs));

function getJsLibs() {
   let jsPath = ["node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js", "node_modules/jquery/dist/jquery.min.js", "node_modules/slick-carousel/slick/slick.min.js"];
   return gulp.src(jsPath).pipe(gulp.dest("src/js/libs"));
}

function getCssLibs() {
   let cssPath = ["node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css", "node_modules/slick-carousel/slick/slick.less", "node_modules/slick-carousel/slick/slick-theme.less"];
   return gulp.src(cssPath).pipe(gulp.dest("src/less/libs/"));
}
