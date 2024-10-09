// Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.
// Example: arr = [5,2,3,4,1]

const arr = [5, 2, 3, 4, 1];

arr.sort((a, b) => a - b);
let difference = Math.abs(arr[0] - arr[1]);
for (let i = 1; i < arr.length - 1; i++) {
  if (Math.abs(arr[i] - arr[i + 1]) < difference) {
    difference = Math.abs(arr[i] - arr[i + 1]);
  }
}

let differenceArray = [];
for (let i = 1; i < arr.length; i++) {
  if (Math.abs(arr[i] - arr[i - 1]) === difference) {
    differenceArray = [...differenceArray, arr[i - 1], arr[i]];
  }
}
