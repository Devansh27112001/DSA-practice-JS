const validSherlockString = (str) => {
  const frequencyMap = str.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const frequencyUniqueSet = new Set(Object.values(frequencyMap));
  if (frequencyUniqueSet.size == 1) {
    return "YES";
  } else if (frequencyUniqueSet.size == 2) {
    const minimum = Math.min(...Object.values(frequencyMap));
    const maximum = Math.max(...Object.values(frequencyMap));
    let minCount = 0;
    let maxCount = 0;
    Object.values(frequencyMap).forEach((value) =>
      value === minimum ? minCount++ : maxCount++
    );
    if (
      (minCount == 1 && minimum == 1) ||
      (maxCount == 1 && maximum == minimum + 1)
    ) {
      return "YES";
    }
  }
  return "NO";
};
