const string = "fdhlvosfpafhalll";

function anagram(string) {
  if (string.length % 2 !== 0) {
    return -1;
  }

  let firstPart = string.substring(0, string.length / 2);
  let secondPart = string.substring(string.length / 2);
  let count = 0;
  for (let i = 0; i < firstPart.length; i++) {
    secondPart.includes(firstPart[i])
      ? (secondPart = secondPart.replace(firstPart[i], ""))
      : count++;
  }
  return count;
}
