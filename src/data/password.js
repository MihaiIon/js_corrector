// ======================================================
// Data / Password
// ======================================================

// Data
// ======================================================

var data = {};

// Methods
// ======================================================

// Tests
// ======================================================

var tests = [
  createTest("Mihai", [
    createAssertion(
      false,
      10,
      createTypeError(
        data,
        "data",
        "mihai is testing yoohoo!",
        "And there even details!"
      )
    ),
    createAssertion(false, 20, createValueError("mihai", "true", data)),
    createAssertion(false, 30, CreateRangeError(data, "data", 2, 6, data))
  ])
];
