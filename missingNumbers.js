const arr_1 = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
const arr_2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
const missingNumbers = [];
const freqArray1 = arr_1.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

const freqArray2 = arr_2.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

for (let key in freqArray2) {
  if (freqArray2[key] - freqArray1[key]) {
    missingNumbers.push(+key);
  }
}

console.log(missingNumbers);
