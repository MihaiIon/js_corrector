// ======================================================
// App
// ======================================================

// require ./_helpers.js
// require ./errors.js
// require ./classes/TestError.js
// require ./classes/Test.js

// require ./tests/threeHouses.js

var resultLabel =
  "\n===========================\n  Résultat\n===========================\n\n";
var errorsLabel =
  "\n===========================\n  Erreurs\n===========================\n";


/**
 *
 */
((obj, log) => {
  log();
  log(
    resultLabel +
      "Votre note est : " +
      Object.keys(obj)
        .map(key => obj[key])
        .filter(t => typeof t === "function")
        .map(t => t())
        .reduce((acc, t) => {
          if (t.hasErrors()) log(t.displayErrors());
          return acc + t.result;
        }, 0) +
      "%"
  );
})(
  test, // Test goes here
  exists(print) ? print : console.log // Output function
);
