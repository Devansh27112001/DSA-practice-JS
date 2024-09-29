const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;
let count = 0;

for (let i = 0; i < s.length; i++) {
  const sum = s.slice(i, i + m).reduce((a, b) => a + b, 0);
  sum === d && count++;
}

console.log(count);
