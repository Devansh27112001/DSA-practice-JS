// non-degenrate triangle cond: a + b > c && a + c > b && b + c > a
// Basically of the array is sorted, then we juts need to check if a+b > c. If this is true, then it is a valid triangle. If not, then it is not a valid triangle
const sticks = [1, 2, 3, 4, 5, 10];
let sum = 0;
let result = [-1];
sticks.sort((a, b) => a - b);
for (let i = 0; i < sticks.length - 2; i++) {
  if (
    sticks[i] + sticks[i + 1] > sticks[i + 2] &&
    sticks[i] + sticks[i + 1] + sticks[i + 2] > sum
  ) {
    sum = sticks[i] + sticks[i + 1] + sticks[i + 2];
    result = [sticks[i], sticks[i + 1], sticks[i + 2]];
  }
}

console.log(result);
