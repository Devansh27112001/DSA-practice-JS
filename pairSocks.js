const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const freqArray = {};
let count1 = 0;
ar.forEach((el) => (freqArray[el] = (freqArray[el] || 0) + 1));
console.log(freqArray);

// SOLUTION 1
for (let key in freqArray) {
  const value = Math.floor(freqArray[key] / 2);
  count1 += value;
}
console.log(count1);

// SOLUTION 2
// let count2 = 0;
// ar.sort((a, b) => a - b);
// for (let i = 0; i < ar.length; i++) {
//   if (ar[i] === ar[i + 1]) {
//     i++;
//     count2++;
//   }
// }

// console.log(count2);
