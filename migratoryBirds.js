const arr = [5, 1, 2, 8, 4, 4, 8, 2, 1, 8, 4];
const objArray = arr.reduce((a, c) => {
  a[c] = 1 + (a[c] || 0);
  return a;
}, {});

console.log(objArray);
const maxValue = Math.max(...Object.values(objArray));
const id = Object.keys(objArray).find((key) => objArray[key] === maxValue);
console.log(id);
