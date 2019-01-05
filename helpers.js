// Helpers
// ======================================================

/**
 *
 * @param {*} obj
 */
var exists = function(obj) {
  return typeof obj !== "undefined";
};

/**
 *
 * @param {*} obj
 * @param {string} expected Expected type.
 */
var isType = function(obj, expected) {
  return exists(obj) && typeof obj === expected;
};

/**
 *
 * @param {*} obj
 * @param {*} expected
 * @param {function} fn
 */
var isEqual = function(obj, expected, fn) {
  if (!exists(obj) || !exists(expected)) return false;
  return exists(fn) ? fn(obj, expected) : obj === expected;
};

/**
 *
 * @param {string} template
 */
var formatString = function(template) {
  var output = template + "";
  for (var i = 1; i < arguments.length; i++) {
    output = output.replace("$" + i, arguments[i]);
  }
  return output;
};

/**
 * Executes and returns the value of the function received
 * in the paramaters.
 * @param {function} fn
 */
var run = function(fn) {
  return fn();
};

// Errors
// ======================================================

var createTypeError = function(obj, name, expected) {
  return formatString(
    "La variable '$1' doit être de type '$2', mais celle-ci est de type '$3'.",
    name,
    expected,
    typeof obj
  );
};

var createFormatError = function(name) {
  return formatString(
    "La variable '$1' ne correspond pas à la chaîne attendue.",
    name
  );
};
