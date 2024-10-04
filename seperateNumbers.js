const s = "90071992547409929007199254740993";
//  To get the last n characters of the string we use s.slice(-n)
let i = 0;
let beautiful = false;
let head = 0;

while (i < s.length - 1) {
  let currentChar = BigInt(s.slice(0, i + 1));
  let newString = currentChar.toString();
  head = currentChar;
  while (newString.length < s.length) {
    currentChar += BigInt(1);
    newString += currentChar.toString(); // console.log(newString);
  }
  if (newString === s) {
    beautiful = true;
    break;
  } else {
    i++;
  }
}

if (beautiful) {
  console.log("YES " + head);
} else {
  console.log("NO");
}
