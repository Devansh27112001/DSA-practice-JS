const superNumber = (n, k) => {};

let finalNumber = Array.from({ length: 4 }, (_, i) => "9875").join("");
while (finalNumber.length > 1) {
  finalNumber = finalNumber.split("").reduce((acc, el) => {
    return `${+acc + +el}`;
  }, 0);
}
console.log(finalNumber);
