var createCounter = (a) => {
  return () => {
    console.log(a);
    return a++;
  };
};

const counter = createCounter(1);
counter();
counter();

// CLOSURE EXAMPLE
const addTwo = (a) => {
  return (b) => {
    return a + b;
  };
};

const addFirst = addTwo(1);
console.log(addFirst(2));
// OR
// This will translate as addTwo(a=1) => returns inner function => innerfunction(4) => return a + b
const add = addTwo(1)(4);
console.log(add);
