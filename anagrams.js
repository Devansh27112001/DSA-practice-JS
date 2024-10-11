const string = "fdhlvosfpafhalll";
let firstPart = string.substring(0, string.length / 2);
let secondPart = string.substring(string.length / 2);
let count = 0;

for (let i = 0; i < firstPart.length; i++) {
  secondPart.includes(firstPart[i])
    ? (secondPart = secondPart.replace(firstPart[i], ""))
    : count++;
}

console.log(count);
