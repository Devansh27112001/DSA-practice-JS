// Outer functiuon: Accepts another function as a parameter
// Inner function:Accepts a value as a parameter and returns the result of the function passed to the outer function
const memoize = (fn) => {
  const cache = {};
  return function (...args) {
    const key = args.join(",");
    if (key in cache) {
      return cache[key];
    } else {
      const value = fn(...args);
      cache[key] = value;
      return value;
    }
  };
};

// 2nd Way : Much faster
const memoizeMap = (fn) => {
  const cache = new Map();
  return function (...args) {
    const key = args.join(",");
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  };
};
