// ======================================================
// Errors
// ======================================================

/**
 * Generates a type error..
 * @param {*} obj The object that is evaluated.
 * @param {string} name The variable's name.
 * @param {string} expectedType Expected type.
 */
var createTypeError = (obj, name, expectedType) =>
  createAssertionError(ASSERT_ERROR_TYPES.TYPE_ERROR, name, obj, expectedType);

/**
 * Generates a value error.
 * @param {string} name The variable's name.
 * @param {*} expected The variable's expected value.
 */
var createValueError = (name, expected, details) =>
  formatString(
    "La valeur de la variable '$1' doit être égale à $2$3.",
    name,
    expected,
    details ? " " + details : ""
  );

var CreateRangeError = (name, min, max) =>
  formatString(
    "La valeur de la variable '$1' doit être entre $2 et $3",
    name,
    min,
    max
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
