// ======================================================
// Corrections / Approximation Pi
// ======================================================

var test = {
    testAll: function() {
        var p = [-1, 0, 1, 2, 5, 10, 25, 100, 500, 20000];
        var res = p.map(approximationPI);
        var trueRes = [0, 0, 4, 2.666666666666667, 3.3396825396825403, 3.0418396189294032,
                       3.1815766854350325, 3.1315929035585537, 3.139592655589785, 3.1415426535898248];

        theTest = new Test();
        for (var i=0; i < p.length; i++) { 
            theTest = theTest.assert(
                isEqual(res[i], trueRes[i]),
                10,
                createReturnError("approximationPI", res[i] + " plutôt que " + trueRes[i] + ", p=" + p[i]));
        }

        return theTest;
    }
};