// ======================================================
// Tests / Password
// ======================================================

var validation = function(motdepasse, validType) {
    
    var len = motdepasse.length;
    
    switch(validType) {
        case "length":
            return len >= 5 && len <= 9;
    	case "firstLast":
        	return motdepasse.charAt(0) != motdepasse.charAt(len-1);
        case "first":
        	return motdepasse.charAt(0) >= 0 && motdepasse.charAt(0) <= 9;
        case "last":
        	return !/[a-zA-Z0-9]/.test(motdepasse.charAt(len-1));
        default:
            throw("Erreur dans la fonction de validation");
    }
};

var prompt1 = function(pw, conf) {
    return function(useless, same) {
        prompt = prompt2(conf);
    	return pw;
    };
}

var prompt2 = function(conf) {
    return function(useless, same) {
    	return conf;
    };
};

var testProg = function(pw, conf, retVar) {
	
    prompt = prompt1(pw, conf);
    program(function() {"";});  // substitute 'print' function
    
    switch(retVar) {
        case "valide":
            return estValide;
        case "identique":
            return estIdentique;
        default:
            throw "ERROR : testProg";
    }
};

var test = {
    testFirstLast: function() {
        var pw1 = "123451";
        var pw2 = "11111?";
        var pw3 = "12345?";
        return new Test()
            .assert(!testProg(pw1, pw1, "valide"), 10, "Valide lorsque premier == dernier.")
            .assert(testProg(pw2, pw2, "valide") && testProg(pw3, pw3, "valide"), 10, "Invalide lorsque premier != dernier.")
    },
    testFirst: function() {
        var pw1 = "abcde$";
        var pw2 = "01234$";
        var pw3 = "98765$";
        return new Test()
            .assert(!testProg(pw1, pw1, "valide"), 10, "Valide lorsque ne débute pas par un chiffre.")
            .assert(testProg(pw2, pw2, "valide") && testProg(pw3, pw3, "valide"), 10, "Invalide lorsque débute par un chiffre.");
    },
    testLast: function() {
        var pw1a = "111119";
        var pw1b = "111110";
        var pw2a = "11111a";
        var pw2b = "11111z";
        var pw3a = "11111A";
        var pw3b = "11111Z";
        var pw4 = "12345$";
        return new Test()
            .assert(!testProg(pw1a, pw1a, "valide") && !testProg(pw1b, pw1b, "valide") &&
                    !testProg(pw2a, pw2a, "valide") && !testProg(pw2b, pw2b, "valide") &&
                    !testProg(pw3a, pw3a, "valide") && !testProg(pw3b, pw3b, "valide"), 10, "Valide lorsque termine par un alphanumérique.")
            .assert(testProg(pw4, pw4, "valide"), 10, "Invalide lorsque ne termine pas par un alphanumérique.");
    },
    testLength: function() {
        var pw1 = "123$";		// trop court
        var pw2 = "123456789$";	// trop long
        var pw3 = "1234$";		// OK min length
        var pw4 = "12345678$";	// OK max length
        return new Test()
            .assert(!testProg(pw1, pw1, "valide"), 5, "Valide lorsque trop court.")
            .assert(!testProg(pw2, pw2, "valide"), 5, "Valide lorsque trop long.")
            .assert(testProg(pw3, pw3, "valide"), 5, "Invalide lorsque de longueur 5.")
            .assert(testProg(pw4, pw4, "valide"), 5, "Invalide lorsque de longueur 9.");
    },
    testConfIdentique: function() {
        var invalid = "123456";
        var valid = "12345$";
        return new Test()
            .assert(!testProg(valid, invalid, "identique"), 10, "'estIdentique' a la valeur 'true' alors que les mots de passe entrés sont différents.")
            .assert(testProg(valid, valid, "identique"), 10, "'estIdentique' a la valeur 'false' alors que les mots de passe entrés sont identiques.");
    }
};