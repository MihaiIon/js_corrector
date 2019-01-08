// ======================================================
// Classes / Test
// ======================================================

/**
 *
 */
class Test {
  constructor() {
    this.result = 0;
    this.errors = [];
  }

  /**
   *
   * @param {boolean} isValid If the test passed, 'isValid' equals 'true'.
   * @param {number} value The points that the student is awarded, if 'isValid' equals 'true'.
   * @param {string} errorMsg The error message.
   */
  assert(isValid, value, errorMsg) {
    if (isValid) this.result += value;
    else
      this.errors.push({
        msg: errorMsg,
        value: value
      });
    return this;
  }

  /**
   *
   */
  hasErrors() {
    return this.errors.length > 0;
  }

  /**
   *
   */
  displayErrors() {
    return this.errors.reduce(
      (str, err) => formatString("$1 (-$2%)\n", str + err.msg, err.value),
      ""
    );
  }
}
