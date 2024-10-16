const winName = (arr) => {
  let cloneArray = arr.slice();
  let name = "BOB";
  while (cloneArray.length > 0) {
    const maxIndex = cloneArray.indexOf(Math.max(...cloneArray));
    cloneArray = cloneArray.slice(0, maxIndex);
    name === "BOB" ? (name = "ANDY") : (name = "BOB");
  }
  return name === "BOB" ? "ANDY" : "BOB";
};

console.log(winName([2, 3, 5, 4, 1]));
