// ======================================================
// Tools / Bundle
// ======================================================

// Libs
var path = require("path");
var bundle = require("bundle-js");

module.exports.exec = function() {
  // Disable logging (hack for 'bundle-js' library).
  var _log = console.log;
  console.log = function() {};

  // Concatenate each file (required by the application).
  var file = path.resolve(__dirname, "../src/index.js");
  var bundledCode = bundle({
    entry: file,
    print: false,
    disablebeautify: true
  });

  // Enable logging.
  console.log = _log;

  // Return bundled code.
  return bundledCode;
};
