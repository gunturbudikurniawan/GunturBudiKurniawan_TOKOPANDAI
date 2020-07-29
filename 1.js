for (i = 1; i <= 6; i++) {
  txt = "";
  for (j = i; j < 10; j++) {
    txt += " ";
  }
  for (k = 0; k < i * 2 - 1; k++) {
    if (k % 2 == 0) {
      txt += "X";
    } else {
      txt += "O";
    }
  }
  console.log(txt);
}
