// ======================================================
// Corrections / Duel contre le Dragon
// ======================================================

var test = {
    testRandBetw: function() {
        
        var theTest = new Test();
        
        var success = [[true, false, false],
                       [true, false, false]];
        
        
        // test between 0-2 and 10-12
        var a = 0; var b = 2;
        var c = 10; var d = 12;
        for (var i=0; i<100; i++) {
            rand0 = randomBetween(a, b);
            if (rand0 < a || rand > b)	success[0][0] = false;
            if (rand0 == a)				success[0][1] = true;
            if (rand0 == b)				success[0][2] = true;
            rand1 = randomBetween(c, d);
            if (rand1 < c || rand > d)	success[1][0] = false;
            if (rand1 == c)				success[1][1] = true;
            if (rand1 == d)				success[1][2] = true;
        }
        
        return new Test()
            .assert(success[0][0], 10, createReturnError("randomBetween", "("+a+", "+b+") => "+rand0))
        	.assert(success[1][0], 10, createReturnError("randomBetween", "("+c+", "+d+") => "+rand1))
            .assert(success[0][1], 10, createReturnError("randomBetween", "("+a+", "+b+") ne retourne jamais "+a))
        	.assert(success[1][1], 10, createReturnError("randomBetween", "("+c+", "+d+") ne retourne jamais "+c))
            .assert(success[0][2], 10, createReturnError("randomBetween", "("+a+", "+b+") ne retourne jamais "+b))
        	.assert(success[1][2], 10, createReturnError("randomBetween", "("+c+", "+d+") ne retourne jamais "+d));
    },
    testAttaquer: function() {
        // attaquer(viesCible, degat)
        return new Test()
            .assert(isEqual(attaquer(50, 50), 0), 10, createReturnError("attaquer", "viesCibles === degat"))
            .assert(isEqual(attaquer(200, 50), 150), 10, createReturnError("attaquer", "viesCibles > degat"))
            .assert(isEqual(attaquer(50, 200), 0), 20, createReturnError("attaquer", "viesCibles < degat"));
    }
};