// In this challenge, the task is to debug the existing code to successfully execute all provided test files.
// A number is called a smart number if it has an odd number of factors. Given some numbers, find whether they are smart numbers or not.
// Debug the given function is_smart_number to correctly check if a given number is a smart number.

function isSmartNumber(input) {
  input
    .split("\n")
    .map((el) => +el)
    .slice(1)
    .forEach((el) => {
      let countFactors = 0;
      for (let i = 1; i <= el; i++) {
        if (el % i === 0) {
          countFactors++;
        }
      }

      if (countFactors % 2 === 0) {
        console.log("NO");
      } else {
        console.log("YES");
      }
    });
}
