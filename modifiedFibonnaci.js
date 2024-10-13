const t1 = 0;
const t2 = 1;
function modifiedFibonacci(t1, t2, n) {
  let [firstValue, secondValue] = [BigInt(t1), BigInt(t2)];
  let i = 3;
  while (i <= n) {
    [firstValue, secondValue] = [
      BigInt(secondValue),
      BigInt(firstValue + secondValue * secondValue),
    ];
    i++;
  }
  return secondValue;
}
