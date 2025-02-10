var HelloWorldFunction = () => {
  let b = 5;
  function a() {
    console.log(b);
    return "Hello World";
  }
  return a;
};

const p = HelloWorldFunction();
console.log(p());

// function test(...args) {
//   const sum = args.reduce((acc, curr) => {
//     return (acc += curr);
//   }, 0);
//   console.log(sum);
// }
// test(1, 2, 3, 4, 5, 6);
