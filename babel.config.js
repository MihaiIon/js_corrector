var plugins = [
  "@babel/plugin-transform-arrow-functions",
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-classes",
  "@babel/plugin-transform-spread",
  "@babel/plugin-transform-shorthand-properties",
  "@babel/plugin-proposal-object-rest-spread"
];

var presets = [["@babel/preset-env"]];

module.exports = { plugins, presets };
