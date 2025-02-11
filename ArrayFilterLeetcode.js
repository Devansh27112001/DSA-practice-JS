const filterArray = (arr, fn) => {
  const newArr = [];
  arr.forEach((element, index) => {
    fn(element, index) && newArr.push(element);
  });
  return newArr;
};
