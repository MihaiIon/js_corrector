// ======================================================
// Tests / Three Houses
// ======================================================

var test = {
  data: {
    width: 10,
    height: 5,
    getRoofHeight: function() {
      return (Math.sqrt(3) / 2) * this.width;
    },
    getRoofArea: function() {
      return (this.width * this.getRoofHeight()) / 2;
    },
    getBaseArea: function() {
      return this.width * this.height;
    },
    getHouseArea: function() {
      return this.getBaseArea() + this.getRoofArea();
    },
    getTotalArea: function() {
      return this.getHouseArea() * 3;
    }
  },
  testFunction: function() {
    var _d = this.test.data;
    return new Test()
      .assert(
        isType(base, "number"),
        10,
        createTypeError(base, "base", "number")
      )
      .assert(isEqual(base, _d.width), 10, createValueError("base", _d.width))
      .assert(
        isType(hauteur, "number"),
        10,
        createTypeError(hauteur, "hauteur", "number")
      )
      .assert(
        isEqual(hauteur, _d.height),
        10,
        createValueError("hauteur", _d.height)
      );
  },
  testToitRectangle: function() {
    var _d = this.test.data;
    return new Test()
      .assert(
        isEqual(aireToit.toFixed(2), _d.getRoofArea().toFixed(2)),
        10,
        createValueError("aireToit", _d.getRoofArea())
      )
      .assert(
        isEqual(aireRectangle, _d.getBaseArea()),
        10,
        createValueError("aireRectangle", _d.getBaseArea())
      );
  },
  testMaison: function() {
    var _d = this.test.data;
    return new Test().assert(
      isEqual(aireMaison.toFixed(2), _d.getHouseArea().toFixed(2)),
      10,
      createValueError("aireMaison", _d.getHouseArea())
    );
  },
  testTotale: function() {
    var _d = this.test.data;
    return new Test().assert(
      isEqual(aireTotale.toFixed(2), _d.getTotalArea().toFixed(2)),
      10,
      createValueError("aireTotale", _d.getTotalArea())
    );
  },
  testPhrase: function() {
    var _d = this.test.data;
    return new Test().assert(
      isEqual(
        phrase.endsWith(_d.getTotalArea() + "cm2") ||
          phrase.endsWith(_d.getTotalArea() + " cm2"),
        true
      ),
      20,
      createFormatError("phrase")
    );
  }
};
