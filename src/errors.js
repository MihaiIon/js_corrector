// ======================================================
// Errors
// ======================================================

/**
 * Generates a type error..
 * @param {*} obj The object that is evaluated.
 * @param {string} name The variable's name.
 * @param {string} expected Expected type.
 */
var createTypeError = (obj, name, expected) =>
  formatString(
    "La variable '$1' doit être de type '$2', mais celle-ci est de type '$3'.",
    name,
    expected,
    typeof obj
  );

/**
 * Generates a value error.
 * @param {string} name The variable's name.
 * @param {*} expected The variable's expected value.
 */
var createValueError = (name, expected) =>
  formatString(
    "La valeur de la variable '$1' doit être égale à $2.",
    name,
    expected
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
