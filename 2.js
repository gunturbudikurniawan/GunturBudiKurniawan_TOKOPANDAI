function sittingArrangement(person, column) {
  let kursi = [];
  let antrian = [];
  if (column < 1) {
    return "invalid number";
  } else {
    for (let j = 0; j < person.length; j++) {
      if (person.length % column !== 0) {
        person.push("kursi kosong");
      }
    }
    for (let i = 0; i < person.length; i++) {
      kursi.push(person[i]);
      if (kursi.length === column) {
        antrian.push(kursi);
        kursi = [];
      }
    }
  }
  return antrian;
}
console.log(sittingArrangement(["X", "Y", "Z"], 0));
console.log(sittingArrangement(["dewi", "shinta", "ani", "agus", "Puji"], 2));
console.log(sittingArrangement(["Yosia", "asgard", "adrisa"], 3));
console.log(
  sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4)
);
