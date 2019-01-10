// ======================================================
// Tests / 3 maisons
// ======================================================

var test = {
    testFunction: function() {
        return new Test()
            .assert(isType(base, "number"), 10, createTypeError(base, "base", "number"))
            .assert(isEqual(base, 10), 10, createValueError("base", 10))
            .assert(isType(hauteur, "number"), 10, createTypeError(hauteur, "hauteur", "number"))
            .assert(isEqual(hauteur, 5), 10, createValueError("hauteur", 5));
    },
    testToitRectangle: function() {
        base = 10;
        hauteur = 5;
        return new Test()
            .assert(isEqual(aireToit, base*base/2), 10, createValueError("aireToit", base*base/2))
            .assert(isEqual(aireRectangle, base*hauteur), 10, createValueError("aireRectangle", base*hauteur));
    },
    testMaison: function() {
        aireToit = 50;
        aireRectangle = 50;
        return new Test()
            .assert(isEqual(aireMaison, aireToit+aireRectangle), 10, createValueError("aireMaison", aireToit+aireRectangle));
    },
    testTotale: function() {
        aireMaison = 100;
        return new Test()
            .assert(isEqual(aireTotale, 3*aireMaison), 10, createValueError("aireTotale", 3*aireMaison));
    },
    testPhrase: function() {
        aireTotale = 300;
        return new Test()
            .assert(isEqual(phrase.endsWith(aireTotale+"cm2") || phrase.endsWith(aireTotale+" cm2"), true), 20, createFormatError("phrase"));
    }
};