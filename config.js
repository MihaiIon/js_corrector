// ======================================================
// Configuration
// ======================================================

// Libs
var path = require("path");

module.exports = {
  root: __dirname,
  getOutputConfiguration: function(currentDirectory) {
    var dir = path.resolve(currentDirectory, "./build");
    return {
      dir: dir,
      file: dir + "\\index.js"
    };
  }
};
