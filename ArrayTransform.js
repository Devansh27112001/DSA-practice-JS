var mapNew = (arr, fn) => {
  const newArr = [];
  arr.forEach((element, index) => {
    const updatedElement = fn(element);
    newArr.push(updatedElement);
  });
  return newArr;
};

console.log(mapNew([1, 2, 3, 4], (n) => n + 1));
