const minimumPowerPlants = (k, arr) => {
  const n = arr.length;
  let count = 0;
  let i = 0;
  let location = i + (k - 1);
  while (i < n) {
    if (arr[location] === 1) {
      i = location + k;
      location = i + (k - 1);
      count++;
      if (location >= n) {
        location = n - 1;
      }
    } else {
      location -= 1;
      if (location < i - k || location < 0) {
        return -1;
      }
    }
  }
  return count;
};
