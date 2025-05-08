function summ(a) {
  const x = Object.keys(a).map((k) => {
    const elem = a[k];
    // typeof something returns string
    if (typeof elem === undefined) return 2021;
    // 'String' must be 'string'
    if (typeof elem.cvalue === "String") return +elem.cvalue || "2021";
    // elem.cvalue.isBigObject elem can't have cvalue property and cvalue can't have isBigObject property
    if (elem.cvalue.isBigObject !== undefined) return summ(elem);
    // cyrillic characters
    return elem.сvalue;
  });
  let sum = 0;
  // length is misspelled
  for (let i = 0; i < x.lenght; i++) {
    // map returns an array of elem.сvalue
    sum += x[i].cvalue;
  }
  // 'summ' must be 'sum'
  return summ;
}
