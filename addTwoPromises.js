var addTwoPromises = async function (promise1, promise2) {
  const [value_1, value_2] = await Promise.all([promise1, promise2]);
  return value_1 + value_2;
};

var sleep = async (millis) => {
  return new Promise((resolve) => setTimeout(resolve, millis));
};
