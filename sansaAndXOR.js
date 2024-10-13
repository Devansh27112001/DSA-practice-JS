// Had to return the XOR of all the contiguos subarrays of the original array.
// LOGIC: if the length of the array is even, then the XOR of all the subarray elements of the given array will be 0.
// if the length of the array is odd, then the XOR of all the subarray elements of the given array will not be 0 and will be the XOR of the elements that are at the even indices of the array.
const array = [1, 2, 3, 4, 5];
const sansAndXor = (array) => {
  let max = 0;
  if (array.length % 2 === 0) {
    return 0;
  }

  for (let i = 0; i < array.length; i += 2) {
    max ^= array[i];
  }
  return max;
};

console.log(sansAndXor(array));
