// ======================================================
// Classes / TestError
// ======================================================

class TestError {
  /**
   * @param {string} message Error message.
   * @param {points} points The points that the student lost.
   */
  constructor(message, points) {
    this.message = message;
    this.points = points;
  }
}
