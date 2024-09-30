// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// EXAMPLE:
// a = [2, 6]
// b = [24,36]
// There are two no.between the arrays: 6 and 12 that fulfills the following two properties:
// 1 -> 6/12 % a[i] === 0 and b[i] % 6/12 === 0

function getTotalX(a, b) {
  let count = 0;
  const max = Math.max(...a);
  const min = Math.min(...b);
  for (let i = max; i <= min; i++) {
    if (a.every((el) => i % el === 0) && b.every((el) => el % i === 0)) {
      count++;
    }
  }
  return count;
}
