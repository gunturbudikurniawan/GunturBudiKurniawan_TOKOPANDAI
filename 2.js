function sittingArrangement(person, column) {
  // Code disini
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
  //   let arrayDalam = [];
  //   let arrayBungkus = [];
  //   let j = 0;
  //   if (!column || column < 1) {
  //     return "Invalid Number";
  //   } else {
  //     let flag = false;
  //     while (flag === false) {
  //       for (let i = 0; i < column; i++) {
  //         if (person[j] === undefined) {
  //           arrayDalam.push("Kursi Kosong");
  //         } else {
  //           arrayDalam.push(person[j]);
  //         }
  //         j++;
  //       }
  //       arrayBungkus.push(arrayDalam);
  //       arrayDalam = [];
  //       if (arrayBungkus.length >= Math.ceil(person.length / column)) {
  //         flag = true;
  //       }
  //     }
  //     return arrayBungkus;
  //   }
}
console.log(sittingArrangement(["X", "Y", "Z"], 0));
console.log(sittingArrangement(["dewi", "shinta", "ani", "agus", "Puji"], 2));
console.log(sittingArrangement(["Yosia", "asgard", "adrisa"], 3));
console.log(
  sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4)
);
