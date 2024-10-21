function counterGame(n) {
  let count = 0;
  let num = n;
  while (num > 1) {
    const power = Math.log2(num);
    // If the number is already a power of 2
    if (Number.isInteger(power)) {
      num = num / 2;
    } else {
      num = num - Math.pow(2, Math.floor(power));
    }
    count++;
  }
  return count % 2 === 0 ? "Richard" : "Louise";
}
