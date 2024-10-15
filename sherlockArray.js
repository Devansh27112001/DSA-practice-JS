const array = [11, 8, 6, 5];

const sherlockArray = (array) => {
  const totalSum = array.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  for (let i = 0; i < array.length; i++) {
    const rightSum = totalSum - array[i] - leftSum;
    if (leftSum === rightSum) {
      return true;
    }
    leftSum += array[i];
  }
  return false;
};
