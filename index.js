// Test class
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
  return this.errors.reduce(function(str, err) {
    return formatString("$1 (-$2%)\n", str + err.msg, err.value);
  }, "");
};

// Program
// ======================================================

var resultLabel =
  "===========================\n  Résultat\n===========================\n\n";
var errorsLabel =
  "\n===========================\n  Erreurs\n===========================\n\n";

/**
 *
 */
(function(obj, log) {
  log(
    resultLabel +
      "Votre note est : " +
      Object.keys(obj)
        .map(function(key) {
          return obj[key];
        })
        .map(function(t) {
          return t();
        })
        .reduce(function(acc, t) {
          log(t.hasErrors() ? errorsLabel + t.displayErrors() : "");
          return acc + t.result;
        }, 0) +
      "%"
  );
})(
  // Tests goes here
  {},
  // Output function
  print
);
