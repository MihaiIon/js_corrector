// ======================================================
// Errors
// ======================================================

/**
 * Generates a type error..
 * @param {*} obj The object that is evaluated.
 * @param {string} type Current type.
 * @param {string} expected Expected type.
 */
var createTypeError = (obj, type, expected) =>
  formatString(
    "La variable '$1' doit être de type '$2', mais celle-ci est de type '$3'.",
    type,
    expected,
    typeof obj
  );

/**
 * Generates a string format error.
 * @param {*} name The variable's name.
 */
var createFormatError = name =>
  formatString(
    "La variable '$1' ne correspond pas à la chaîne de caratères attendue.",
    name
  );
