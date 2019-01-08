// ======================================================
// App
// ======================================================

// require ./_helpers.js
// require ./errors.js
// require ./classes/TestError.js
// require ./classes/Test.js
// require ./tests/introduction.js

var resultLabel =
  "===========================\n  Résultat\n===========================\n\n";
var errorsLabel =
  "\n===========================\n  Erreurs\n===========================\n\n";

/**
 *
 */
((obj, log) => {
  log(
    resultLabel +
      "Votre note est : " +
      Object.keys(obj)
        .map(key => obj[key])
        .map(t => t())
        .reduce((acc, t) => {
          log(t.hasErrors() ? errorsLabel + t.displayErrors() : "");
          return acc + t.result;
        }, 0) +
      "%"
  );
})(
  test, // Test goes here
  print // Output function
);
