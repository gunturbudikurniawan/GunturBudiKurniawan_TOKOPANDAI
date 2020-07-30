function balikKata(kata) {
  let terbalik = "";
  for (let j = kata.length - 1; j >= 0; j--) {
    terbalik += kata[j];
  }
  return terbalik;
}

console.log(balikKata("Hello World and Coders"));
console.log(balikKata("John Doe"));
console.log(balikKata("I am a bookworm"));
console.log(balikKata("Coding is my hobby"));
console.log(balikKata("Super"));
