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
var createValueError = (name, expected, details) =>
  formatString(
    "La valeur de la variable '$1' doit être égale à $2$3.",
    name,
    expected,
    details ? " " + details : ""
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