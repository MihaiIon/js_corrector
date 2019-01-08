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
    var oConfig = config.getOutputConfiguration(__dirname);

    // Create output folder
    if (!fs.existsSync(oConfig.dir)) {
      fs.mkdirSync(oConfig.dir);
    }

    // Uglify
    var uglyResult = UglifyJS.minify(result.code);
    if (uglyResult.error) {
      console.log(uglyResult.error);
    }

    // Write to file
    fs.writeFileSync(oConfig.file, uglyResult.code);
    console.log(
      "\x1b[32m",
      `> ** Build exported to '${oConfig.file.replace(__dirname, "[root]")}'\n`,
      "\x1b[0m"
    );
  }
});
