var tests = {
  testFunction: function() {
    return new Test()
      .assert(
        isType(prenom, "string"),
        10,
        createTypeError(prenom, "prenom", "string")
      )
      .assert(isType(nom, "string"), 10, createTypeError(nom, "nom", "string"))
      .assert(isType(age, "number"), 10, createTypeError(age, "age", "number"))
      .assert(
        isType(discipline, "string"),
        10,
        createTypeError(discipline, "discipline", "string")
      )
      .assert(
        isType(salutation, "string"),
        10,
        createTypeError(salutation, "salutation", "string")
      )
      .assert(
        isEqual(
          salutation,
          formatString("Bonjour, mon nom est $1 $2!", prenom, nom)
        ),
        10,
        createFormatError("salutation")
      )
      .assert(
        isType(informations, "string"),
        10,
        createTypeError(informations, "informations", "string")
      )
      .assert(
        isEqual(
          informations,
          formatString("J'ai $1 ans et j'étudie en $2!", age, discipline)
        ),
        10,
        createFormatError("informations")
      )
      .assert(
        isType(introduction, "string"),
        10,
        createTypeError(introduction, "introduction", "string")
      )
      .assert(
        isEqual(introduction, salutation + "\n" + informations),
        10,
        createFormatError("introduction")
      );
  }
};
