const winPlayer = (arr) => {
  if (Math.max(...arr) === 1) {
    return arr.length % 2 === 0 ? "First" : "Second";
  }
  const xor = arr.reduce((a, b) => a ^ b);
  return xor === 0 ? "Second" : "First";
};
