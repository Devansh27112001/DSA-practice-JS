// Give an array, find the minimum absolute difference between any two elements.
const array = [-2, 2, 4];
array.sort((a, b) => a - b);
let minabsdiff = Math.abs(array[0] - array[1]);
for (let i = 1; i < array.length - 1; i++) {
  if (Math.abs(array[i] - array[i + 1]) < minabsdiff) {
    minabsdiff = Math.abs(array[i] - array[i + 1]);
  }
}
console.log(minabsdiff);
