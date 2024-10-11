const arr = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
const k = 4;
arr.sort((a, b) => a - b);
// FIRST WAY:
let unfairness = Math.max(...arr.slice(0, k)) - Math.min(...arr.slice(0, k));
for (let i = 1; i < arr.length - k + 1; i++) {
  const difference =
    Math.max(...arr.slice(i, i + k)) - Math.min(...arr.slice(i, i + k));
  if (difference < unfairness) {
    unfairness = difference;
  }
  console.log(arr.slice(i, i + k));
}

// SECOND WAY:
// let unfairness = [];
// for (let i = 0; i < arr.length - k + 1; i++) {
//   unfairness.push(
//     Math.max(...arr.slice(i, i + k)) - Math.min(...arr.slice(i, i + k))
//   );
// }
// console.log(Math.min(...unfairness));
