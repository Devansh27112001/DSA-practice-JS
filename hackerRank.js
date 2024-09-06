// pos, neg and zero ratios in an array with six decimal places
const arr = [1, 1, -1, 0, -1];
const posRatios = (arr.filter((ele) => ele > 0).length / arr.length).toFixed(6);
const negRatios = (arr.filter((ele) => ele < 0).length / arr.length).toFixed(6);
const zeroRatios = (arr.filter((ele) => ele === 0).length / arr.length).toFixed(
  6
);
console.log(posRatios);
console.log(negRatios);
console.log(zeroRatios);

// min and max sum using only four elements in an array with 5 elements
const arr2 = [1, 5, 3, 9, 7];
arr2.sort((a, b) => a - b);
const sum = arr2.reduce((a, b) => a + b);
const min = Math.min(...arr2);
const max = Math.max(...arr2);
const minSum = sum - min;
const maxSum = sum - max;
console.log(minSum + " " + maxSum);
