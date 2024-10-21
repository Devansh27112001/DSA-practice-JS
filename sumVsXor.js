// For a number, count increases if for a number k such that, 0 <= k < number, number + k === number XOR k
// METH0D 1: Inefficient fro large numbers
// function sumVsXor(number) {
//   let count = 0;
//   for (let i = 0; i < number; i++) {
//     if (number + i === (number ^ i)) {
//       count++;
//     }
//   }
//   return count;
// }

function sumVsXor(number) {
  return (
    2 **
    (!number
      ? 0
      : number
          .toString(2)
          .split("")
          .filter((x) => x == 0).length)
  );
}

// console.log(sumVsXor(4));
