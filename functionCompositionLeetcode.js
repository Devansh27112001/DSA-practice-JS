const compose = (functions) => {
  return function (x) {
    if (functions.length === 0) {
      return x;
    } else {
      let initialValue = x;
      for (let i = functions.length - 1; i >= 0; i--) {
        initialValue = functions[i](initialValue);
      }
      return initialValue;
    }
  };
};

const arrayOfFunctions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
const callMethod = compose(arrayOfFunctions)(1);
console.log(callMethod);
