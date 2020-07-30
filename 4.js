function reverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
function rightPyramid(str) {
  const len = str.length;
  const whitespace = " ";

  for (let i = 0; i < len; i++) {
    let result = "";
    let substring = str.substring(len - i - 1, len);

    for (let j = len; j > i; j--) {
      result += whitespace;
    }

    result += i % 2 === 1 ? substring : reverse(substring);
    console.log(result);
  }
}

rightPyramid("javascript");
