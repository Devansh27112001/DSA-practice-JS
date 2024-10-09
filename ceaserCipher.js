// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
const string = "There's-a-starman-waiting-in-the-sky";
let result = "";
const cipheredText = (str, shift) => {
  const shifted = shift % 26;
  result = str
    .split("")
    .map((element) => {
      // a to z
      if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
        const character =
          element.charCodeAt() + shifted > 90
            ? element.charCodeAt() + shifted - 26
            : element.charCodeAt() + shifted;
        return String.fromCharCode(character);
      } else if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
        const character =
          element.charCodeAt() + shifted > 122
            ? element.charCodeAt() + shifted - 26
            : element.charCodeAt() + shifted;
        return String.fromCharCode(character);
      }
      return element;
    })
    .join("");
};

cipheredText(string, 3);
console.log(result);
