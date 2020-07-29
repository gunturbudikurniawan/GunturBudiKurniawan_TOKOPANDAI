function halfPiramid(str) {
  for (var i = 0; i < str.length; i++) {
    var s = "";

    for (var k = 0; k < str.length; k++) {
      if (k < i) {
        s += " ";
      } else {
        s += str[k];
      }
    }
    console.log(s);
  }
}
halfPiramid("budi");
