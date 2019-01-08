// ======================================================
// Classes / Test
// ======================================================

/**
 *
 */
function Test() {
  this.result = 0;
  this.errors = [];
}

/**
 *
 * @param {boolean} isValid If the test passed, 'isValid' equals 'true'.
 * @param {number} value The points that the student is awarded, if 'isValid' equals 'true'.
 * @param {string} errorMsg The error message.
 */
Test.prototype.assert = function(isValid, value, errorMsg) {
  if (isValid) this.result += value;
  else
    this.errors.push({
      msg: errorMsg,
      value: value
    });
  return this;
};

/**
 *
 */
Test.prototype.hasErrors = function() {
  return this.errors.length > 0;
};

/**
 *
 */
Test.prototype.displayErrors = function() {
  return this.errors.reduce(
    (str, err) => formatString("$1 (-$2%)\n", str + err.msg, err.value),
    ""
  );
};
