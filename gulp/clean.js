const del = require('del')
let config = require("./config");

module.exports = function clean() {
  return del(config.out.baseDir, {force: true});
}
