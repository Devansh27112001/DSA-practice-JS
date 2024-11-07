const newYearArray = [1, 2, 5, 3, 7, 8, 6, 4];
const minimumBribes = (q) => {
  let bribes = "Too chaotic";
  if (!q.some((value, index) => value - index > 3)) {
    bribes = 0;
    for (let count = 1; count <= 2; count++) {
      for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] < q[i - 1]) {
          [q[i], q[i - 1]] = [q[i - 1], q[i]];
          bribes++;
        }
      }
    }
  }
  console.log(bribes);
};

console.log(minimumBribes(newYearArray));
