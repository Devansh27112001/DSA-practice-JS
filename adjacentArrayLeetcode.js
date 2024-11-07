const array = [
  [4, -2],
  [1, 4],
  [-3, 1],
];

let adjacentFreq = {};
const originalArray = [];

for (let i = 0; i < array.length; i++) {
  if (!adjacentFreq[array[i][0]]) {
    adjacentFreq[array[i][0]] = [];
  }
  if (!adjacentFreq[array[i][1]]) {
    adjacentFreq[array[i][1]] = [];
  }
  adjacentFreq[array[i][0]].push(array[i][1]);
  adjacentFreq[array[i][1]].push(array[i][0]);
}
const arrayLength = Object.keys(adjacentFreq).length;

// getting the value of the key which te length of the value is 1
let start = +Object.keys(adjacentFreq).find(
  (key) => adjacentFreq[key].length === 1
);
console.log(start);
