// ======================================================
// Classes / Test
// ======================================================

class Test {
  constructor() {
    this.result = 0;
    this.errors = [];
  }

  /**
   * If the assertion passes (if 'isValid' equals 'true'),
   * the student is awared an amount of 'points'. The
   * 'points' are specified in the arguments by the evaluator.
   *
   * If the assertion fails, an error message is saved (along
   * the with the amount of points that the test was worth).
   *
   * @param {boolean} isValid Validity of the test.
   * @param {number} points The points awarded if the test is valid.
   * @param {string} errorMsg The error message.
   */
  assert(isValid, points, errorMsg) {
    if (isValid) this.result += points;
    else this.errors.push(new TestError(errorMsg, points));
    return this;
  }

  /**
   * Returns 'true' if there are errors.
   */
  hasErrors() {
    return this.errors.length > 0;
  }

  /**
   * Displays string containing a list of errors.
   * Each failed test generates an error object.
   */
  displayErrors() {
    return this.errors.map(function(err) {
      return err.message + "; -" + err.points + "%.";
    }).join("\n");
  }
}
