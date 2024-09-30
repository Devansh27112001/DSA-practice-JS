a = [1, 1, 2, 2, 4, 4, 5, 5, 5];

function pickingNumbers(a) {
  let maxCount = 0;
  for (let i = 0; i < a.length; i++) {
    let count = 1;
    for (let j = i + 1; j < a.length; j++) {
      if (Math.abs(a[i] - a[j]) > 1) {
        break;
      }
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    }
  }
  return maxCount;
}

console.log(pickingNumbers(a));
