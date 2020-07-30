function gantiKata(kata) {
  let newSentence = "";
  let vokalBesar = "AIUEO";
  let vokalKecil = "aiueo";
  for (let i = 0; i < kata.length; i++) {
    let flag = true;
    for (let j = 0; j < vokalBesar.length; j++) {
      if (kata[i] == vokalBesar[j]) {
        newSentence += "$";
        flag = false;
      } else if (kata[i] == vokalKecil[j]) {
        newSentence += "$";
        flag = false;
      }
    }
    if (flag == true) {
      newSentence += kata[i];
    }
  }
  return newSentence;
}

console.log(gantiKata("Hello World and Coders"));
console.log(gantiKata("John Doe"));
console.log(gantiKata("I am a bookworm"));
console.log(gantiKata("Coding is my hobby"));
console.log(gantiKata("Super"));
console.log(gantiKata("i love jAvascript"));
