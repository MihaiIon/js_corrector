// ======================================================
// Tests / Password
// ======================================================

var myPrompt = function(pw, conf) {
    var firstCall = true;
    return function(useless, same) {
        if (firstCall) {
            firstCall = false;
            return pw;
        }
        else {
            return conf;
        }
    }
}

var testProg = function(retVar, pw, conf) {

    if (typeof conf == "undefined")
        conf = pw;
	
    program(function() {"";}, myPrompt(pw, conf));  // substitute 'print' and 'prompt' functions
    
    switch(retVar) {
        case "valid":
            return estValide;
        case "identique":
            return estIdentique;
        default:
            throw "ERROR : testProg";
    }
};

var test = {
    data: {
        validStart: "11111",
        validEnd:   "1111$",

        invalidShort: "123$",
        validShort:   "1234$",
        validLong:    "12345678$",
        invalidLong:  "123456789$",

        valid:   "12345$",
        invalid: "123456"
    },
    testFirstLast: function() {
        var _d = this.test.data;
        return new Test()
            .assert(testProg("valid", _d.validStart + "$"), 10, "Devrait être valide lorsque premier != dernier.")
            .assert(!testProg("valid", _d.validStart + "1"), 10, "Devrait être invalide lorsque premier == dernier.");
    },
    testFirst: function() {
        var _d = this.test.data;
        return new Test()
            .assert(testProg("valid", "0" + _d.validEnd) && testProg("valid", "9" + _d.validEnd),
                10, "Devrait être valide lorsque débute par un chiffre.")
            .assert(!testProg("valid", "a" + _d.validEnd),
                10, "Devrait être invalide lorsque ne débute pas par un chiffre.");
    },
    testLast: function() {
        var _d = this.test.data;
        return new Test()
            .assert(testProg("valid", _d.validStart + "$"),
                10, "Devrait être valide lorsque termine par un symbole.")
            .assert(!testProg("valid", _d.validStart + "0") && !testProg("valid", _d.validStart + "9") &&
                    !testProg("valid", _d.validStart + "a") && !testProg("valid", _d.validStart + "z") &&
                    !testProg("valid", _d.validStart + "A") && !testProg("valid", _d.validStart + "Z"),
                10, "Devrait être invalide lorsque termine par un alphanumérique.");
    },
    testLength: function() {
        var _d = this.test.data;
        return new Test()
            .assert(testProg("valid", _d.validShort), 5, "Devrait être valide lorsque de longueur 5.")
            .assert(testProg("valid", _d.validLong), 5, "Devrait être valide lorsque de longueur 9.")
            .assert(!testProg("valid", _d.invalidShort), 5, "Devrait être invalide lorsque trop court.")
            .assert(!testProg("valid", _d.invalidLong), 5, "Devrait être invalide lorsque trop long.");
    },
    testConfIdentique: function() {
        var _d = this.test.data;
        return new Test()
            .assert(testProg("identique", _d.valid, _d.valid),
                10, "'estIdentique' a la valeur 'false' lorsque les mots de passe entrés sont identiques.")
            .assert(!testProg("identique", _d.valid, _d.invalid),
                10, "'estIdentique' a la valeur 'true' lorsque les mots de passe entrés sont différents.");
    }
};