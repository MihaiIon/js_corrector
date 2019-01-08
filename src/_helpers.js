// ======================================================
// Helpers
// ======================================================

/**
 * Checks if the received object is defined in the global
 * scope.
 * @param {*} obj Javascript Object.
 */
var exists = obj => typeof obj !== "undefined";

/**
 * Checks if the received object is of the expected type.
 * @param {*} obj Javascript Object.
 * @param {string} expected Expected type.
 */
var isType = (obj, expected) => exists(obj) && typeof obj === expected;

/**
 * Checks if the received object is equal to the expected
 * value. (Optional) A 3rd parameter is available in case
 * there is a need to use some custom validations.
 * @param {*} obj Javascript Object.
 * @param {*} expected Expected value.
 * @param {function} fn (Optional) Custom validation function.
 */
var isEqual = (obj, expected, fn) => {
  if (!exists(obj) || !exists(expected)) return false;
  return exists(fn) ? fn(obj, expected) : obj === expected;
};

/**
 * Generates a string based on a string template and a list
 * of arguments.
 *
 * Ex:
 *
 * // Code
 * formatString("$1 $2!", "Hello", "world");
 *
 * // Output
 * "Hello world!"
 *
 * @param {string} template String template.
 */
var formatString = function(template) {
  var output = template + "";
  for (var i = 1; i < arguments.length; i++) {
    output = output.replace("$" + i, arguments[i]);
  }
  return output;
};

/**
 * Executes and returns the value of the received function.
 * @param {function} fn Function to execute.
 * @param {[]} args Function's arguments.
 */
var run = (fn, args) => fn.apply(null, args);

// Jimmy Martinez - PDFs
// Ronald Gedeon - PDFs
