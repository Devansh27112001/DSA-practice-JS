let arr = [1, 2, 3, 4, 5];
const d = 4;
// Rotate left d times
for (i = 0; i < d; i++) {
  arr.push(arr.shift());
}
arr;
