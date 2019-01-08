// ======================================================
// Tools / Build
// ======================================================

// Libs
var fs = require("fs");
var path = require("path");
var babel = require("@babel/core");
var UglifyJS = require("uglify-js");

// Get bundled code.
var code = require("./bundle").exec();

// Output File
var oFolder = path.resolve(__dirname, "../build/");
var oFile = path.resolve(oFolder, "index.js");

// Transform JS in CommunJS and export to "../build/index.js".
babel.transform(code, {}, function(err, result) {
  if (err) console.log(err);
  else {
    if (!fs.existsSync(oFolder)) {
      fs.mkdirSync(oFolder);
    }

    // Uglify
    var uglyResult = UglifyJS.minify(result.code);
    if (uglyResult.error) {
      console.log(uglyResult.error);
    }

    // Write to file
    fs.writeFileSync(oFile, uglyResult.code);
    console.log(
      "\x1b[32m",
      "> ** Build exported to '[root]/build/index.js'\n",
      "\x1b[0m"
    );
  }
});
