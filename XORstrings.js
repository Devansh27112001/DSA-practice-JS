const s = "10101";
const t = "00101";
let result = "";
for (let i = 0; i < s.length; i++) {
  result += s[i] ^ t[i];
}
console.log(result);
