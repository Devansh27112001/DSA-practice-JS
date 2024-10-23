// This would be an easy problem if we know all the possible combinations of 3x3 magic squares.

const possibleCombinations = [
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
];

const square = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

// This method returns the cost of the target with the pattern. The input to tthis method is the pattern and the target both flattened.
const getCost = (pattern, target) =>
  pattern.reduce((acc, curr, i) => acc + Math.abs(curr - target[i]), 0);

const minimizeCost = possibleCombinations.reduce(
  (acc, curr) => Math.min(acc, getCost(curr.flat(), square.flat())),
  Infinity
);
console.log(minimizeCost);
