// ======================================================
// Tools / Bundle
// ======================================================

// Libs
var path = require("path");
var bundle = require("bundle-js");

module.exports.exec = function() {
  var file = path.resolve(__dirname, "../src/index.js");
  return bundle({ entry: file, print: true, disablebeautify: true });
};
