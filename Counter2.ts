const createCounter = (val: number) => {
  let curr = val;
  return {
    increment: () => {
      return ++curr;
    },
    decrement: () => {
      return --curr;
    },
    reset: () => {
      return val;
    },
  };
};

const counter = createCounter(4);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
