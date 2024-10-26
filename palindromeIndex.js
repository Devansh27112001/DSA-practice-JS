const isPalidrome = (s) => {
  if (s === s.split("").reverse().join("")) {
    return true;
  }
  return false;
};

// Solution 1
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

// Solution 2
const index = (string) => {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) {
      if (isPalidrome(string.slice(left + 1, right + 1))) {
        return left;
      }
      if (isPalidrome(string.slice(left, right))) {
        return right;
      }
      return -1;
    }
    left++;
    right--;
  }
  return -1;
};

console.log(index("abceba"));
