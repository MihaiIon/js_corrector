// ======================================================
// Configuration
// ======================================================

// Libs
var path = require("path");

module.exports = {
  __root: __dirname,
  output: {
    dir: path.resolve(__dirname, "./build"),
    file: path.resolve(__dirname, "./build/index.js")
  }
};
