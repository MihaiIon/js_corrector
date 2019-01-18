// ======================================================
// Tools / Build
// ======================================================

// Configuration
var config = require("../config");

// Libs
var fs = require("fs");
var babel = require("@babel/core");
var UglifyJS = require("uglify-js");

// Get bundled code.
var code = require("./bundle").exec();

// Transform JS in CommunJS and export to "../build/index.js".
babel.transform(code, {}, function(err, result) {
  if (err) console.log(err);
  else {
    // Get output configuration
    var output = config.output;

    // Create output folder
    if (!fs.existsSync(output.dir)) {
      fs.mkdirSync(output.dir);
    }

    // Uglify
    var uglyResult = UglifyJS.minify(result.code);
    if (uglyResult.error) {
      console.log(uglyResult.error);
    }

    // Write to file
    fs.writeFileSync(output.file, uglyResult.code);
    console.log(output.file);
    console.log(
      "\x1b[32m",
      `\n> ** Build exported to '${output.file.replace(
        config.__root,
        "[root]"
      )}'\n`,
      "\x1b[0m"
    );
  }
});
