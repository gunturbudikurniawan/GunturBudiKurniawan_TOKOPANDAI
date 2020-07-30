function gantiKata(kata) {
  // Code disini
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

// TEST CASES
console.log(gantiKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(gantiKata("John Doe")); // eoD nhoJ
console.log(gantiKata("I am a bookworm")); // mrowkoob a ma I
console.log(gantiKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(gantiKata("Super")); // repuS
console.log(gantiKata("i love jAvascript")); // repuS
