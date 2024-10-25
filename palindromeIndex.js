const isPalidrome = (string) => {
  if (s === s.split("").reverse().join("")) {
    return true;
  }
  return false;
};

const palindromeIndex = (string) => {
  const n = string.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (string[i] !== string[n - 1 - i]) {
      if (isPalidrome(string.slice(i + 1, n - i))) {
        return i;
      }
      if (isPalidrome(string.slice(i, n - i - 1))) {
        return n - i - 1;
      }
      return -1;
    }
  }
  return -1;
};
