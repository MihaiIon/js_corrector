// ======================================================
// Errors
// ======================================================

var ASSERT_ERROR_TYPES = {
  TYPE_ERROR: 0,
  VALUE_ERROR: 1,
  RANGE_ERROR: 2,
  FORMAT_ERROR: 3,
  RETRUN_ERROR: 4
};

/**
 * Simple templating.
 * @param {string} details Details that the tester wants to add.
 */
var formatDetails = (details = "") =>
  details.length > 0 ? ` Details: ${details}.` : "";

/**
 *
 * @param {number} type Error type.
 * @returns {{ type: "ASSERTION_ERROR", msg: string }} Assertion error object.
 */
var createAssertionError = function(type) {
  var args = Array.prototype.slice.call(arguments).slice(1);
  return {
    type: "ASSERTION_ERROR",
    msg: (() => {
      switch (type) {
        case ASSERT_ERROR_TYPES.TYPE_ERROR:
          return (
            `The variable '${args[0]}' was of type '${typeof args[1]}'` +
            `, but was expected to be of type '${args[2]}'.` +
            formatDetails(args[3])
          );
        case ASSERT_ERROR_TYPES.VALUE_ERROR:
          return (
            `The variable '${args[0]}' must be equal to '${args[1]}',` +
            ` but its actual value is '${args[2]}'.` +
            formatDetails(args[3])
          );
        case ASSERT_ERROR_TYPES.RANGE_ERROR:
          return (
            `The variable '${args[1]}' must be between '${args[2]}'` +
            ` and '${args[3]}', but its actual value is '${args[0]}'` +
            formatDetails(args[4])
          );
        case ASSERT_ERROR_TYPES.FORMAT_ERROR:
        case ASSERT_ERROR_TYPES.RETRUN_ERROR:
        default:
          return `ERROR_NOT_YET_IMPLEMENTED : type(${type})`;
      }
    })()
  };
};

// Helpers
// ======================================================

/**
 * Generates a type error.
 * @param {*} obj The object that is evaluated.
 * @param {string} name The variable's name.
 * @param {string} expectedType Expected type.
 * @param {string} details Details that the tester wants to add.
 * @returns {{ type: "ASSERTION_ERROR", msg: string }} Assertion error object.
 */
var createTypeError = (obj, name, expectedType, details = "") =>
  createAssertionError(
    ASSERT_ERROR_TYPES.TYPE_ERROR,
    name,
    obj,
    expectedType,
    details
  );

/**
 * Generates a value error.
 * @param {string} name The variable's name.
 * @param {*} expected The variable's expected value.
 * @param {string} details Details that the tester wants to add.
 * @returns {{ type: "ASSERTION_ERROR", msg: string }} Assertion error object.
 */
var createValueError = (name, expected, details) =>
  createAssertionError(ASSERT_ERROR_TYPES.VALUE_ERROR, name, expected, details);

/**
 *
 * @param {*} obj The object that is evaluated.
 * @param {string} name The variable's name.
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @returns {{ type: "ASSERTION_ERROR", msg: string }} Assertion error object.
 */
var CreateRangeError = (obj, name, min, max, details) =>
  createAssertionError(
    ASSERT_ERROR_TYPES.RANGE_ERROR,
    obj,
    name,
    min,
    max,
    details
  );

/**
 * Generates a string format error.
 * @param {string} name The variable's name.
 */
var createFormatError = name =>
  formatString(
    "La variable '$1' ne correspond pas à la chaîne de caratères attendue.",
    name
  );

var createReturnError = (name, details) =>
  formatString(
    "La valeur retournée par la fonction '$1' ne correspond au résultat attendu ($2).",
    name,
    details
  );
