const gulp = require("gulp");
const rename = require("gulp-rename");
const svgSprite = require("gulp-svg-sprite");
const gulpif = require("gulp-if");

let config = require("./config.js");

module.exports = function svgsprite() {
   let src = "src/svg/**/*.svg";
   let dist = "dist/svg";

   let config = {
      //dest: "dest-folder/", не работает
      log: null,
      shape: {
         id: {
            // SVG shape ID related options
            //separator: "--", // Separator for directory name traversal
     
            //pseudo: "~", // File name separator for shape states (e.g. ':hover')
            //whitespace: "_", // Whitespace replacement for shape IDs
         },
         dimension: {
            // Dimension related options
            //maxWidth: 2000, // Max. shape width
            //maxHeight: 2000, // Max. shape height
            //precision: 2, // Floating point precision
            attributes: true, // Width and height attributes on embedded shapes
         },
         spacing: {
            // Spacing related options
            padding: 0, // Padding around all shapes
            box: "content", // Padding strategy (similar to CSS `box-sizing`)
         },
      },
      mode: {
        
         //defs: {
            //example: true
        // },
         symbol: {
            //example: true,
            dest: "../../src/pug/include",
            sprite: "",
            dimensions: "-dim",
            prefix: ".svg-",
            render: {
               less: {
                  dest: "../../../src/less/pages/sprite.less"
               }
            }
         }
      }
      //mode: {
      //   symbol: {
      //      sprite: "/sprite.svg",
      //      render: {
      //         less: {
      //            dest:'/sprite.less'
      //         }
      //      }
      //   }
      //}
   };

   return gulp.src(src).pipe(svgSprite(config)).pipe(gulp.dest(dist));
};
