// Helpers
// ======================================================

/**
 * Checks if the received object is defined in the global
 * scope.
 * @param {*} obj Javascript Object.
 */
var exists = function(obj) {
  return typeof obj !== "undefined";
};

/**
 * Checks if the received object is of the expected type.
 * @param {*} obj Javascript Object.
 * @param {string} expected Expected type.
 */
var isType = function(obj, expected) {
  return exists(obj) && typeof obj === expected;
};

/**
 * Checks if the received object is equal to the expected
 * value. (Optional) A 3rd parameter is available in case
 * there is a need to use some custom validations.
 * @param {*} obj Javascript Object.
 * @param {*} expected Expected value.
 * @param {function} fn (Optional) Custom validation function.
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
 * Executes and returns the value of the received function
 * @param {function} fn Function to execute.
 * @param {[]} args Function's arguments.
 */
var run = function(fn, args) {
  return fn.apply(null, args);
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
