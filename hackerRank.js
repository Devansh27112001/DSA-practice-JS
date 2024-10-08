//-------  pos, neg and zero ratios in an array with six decimal places --------
const arr = [1, 1, -1, 0, -1];
const posRatios = (arr.filter((ele) => ele > 0).length / arr.length).toFixed(6);
const negRatios = (arr.filter((ele) => ele < 0).length / arr.length).toFixed(6);
const zeroRatios = (arr.filter((ele) => ele === 0).length / arr.length).toFixed(
  6
);
// console.log(posRatios);
// console.log(negRatios);
// console.log(zeroRatios);

//-------------min and max sum using only four elements in an array with 5 elements----------
const arr2 = [1, 5, 3, 9, 7];
arr2.sort((a, b) => a - b);
const sum = arr2.reduce((a, b) => a + b);
const min = Math.min(...arr2);
const max = Math.max(...arr2);
const minSum = sum - min;
const maxSum = sum - max;
// console.log(minSum + " " + maxSum);

// Smallest positive element that is missing
const array = [1, 2, 3, 4, 8]; // Should return 5
const set = new Set(array);
let smallestPositive = 1;
while (set.has(smallestPositive)) {
  smallestPositive++;
}
// console.log(smallestPositive);

//-------------Given a time in -hour AM/PM format, convert it to military (24-hour) time-------------
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const s = "12:01:00AM";
const convertedTime = (date) => {
  const includesPM = date.includes("PM");
  const includesAM = date.includes("AM");
  let newTime = "";
  if (includesPM) {
    const [hour, minute, seconds] = date.split(":");
    if (+hour === 12) {
      newTime = `${hour}:${minute}:${seconds.split("PM")[0]}`;
      return newTime;
    }
    newTime = `${+hour + 12}:${minute}:${seconds.split("PM")[0]}`;
    return newTime;
  }

  if (includesAM) {
    const [hour, minute, seconds] = date.split(":");
    if (+hour === 12) {
      newTime = `${+hour - 12}0:${minute}:${seconds.split("AM")[0]}`;
      return newTime;
    }
    return `${hour}:${minute}:${seconds.split("AM")[0]}`;
  }
};
// console.log(convertedTime(s));

//--------------------------------------------
scores = [12, 24, 10, 24];
let minumum = scores[0];
let maximum = scores[0];
let maxCount = 0;
let minCount = 0;

scores.forEach((element) => {
  if (element > maximum) {
    maximum = element;
    maxCount++;
  }
  if (element < minumum) {
    minumum = element;
    minCount++;
  }
});
// console.log(maxCount,minCount)

// --------------------------------------------------
// C;V;mobile phone -> mobilePhone
// C;C;coffee machine -> coffee machine
// C;M;white sheet of paper -> whiteSheetOfPaper()
// .slice(starting index (included), ending index (not included))
let input = "S;M;plasticCup()";
const [operation, type, stringName] = input.split(";");
let finalString = "";
if (operation === "C") {
  if (type === "V") {
    finalString = stringName
      .split(" ")
      .map((el, i) => {
        if (i === 0) {
          return el;
        }

        return el.slice(0, 1).toUpperCase() + el.slice(1);
      })
      .join("");
  } else if (type === "C") {
    finalString = stringName
      .split(" ")
      .map((el) => {
        // First character to uppercase and the rest of the characters as it is.
        return el.slice(0, 1).toUpperCase() + el.slice(1);
      })
      .join("");
  } else if (type === "M") {
    finalString =
      stringName
        .split(" ")
        .map((el, i) => {
          if (i === 0) {
            return el;
          }
          return el.slice(0, 1).toUpperCase() + el.slice(1);
        })
        .join("") + "()";
  }
} else if (operation === "S") {
  if (type === "V") {
    finalString = stringName
      .split("")
      .map((el) => (el === el.toUpperCase() ? " " + el.toLowerCase() : el))
      .join("");
  } else if (type === "C") {
    finalString = stringName
      .split("")
      .map((el) => (el === el.toUpperCase() ? " " + el.toLowerCase() : el))
      .join("")
      .trim();
  } else if (type === "M") {
    finalString = stringName
      .slice(0, -2)
      .split("")
      .map((el) => (el === el.toUpperCase() ? " " + el.toLowerCase() : el))
      .join("");
  }
}

// --------------------------------------------------
function compress(message) {
  let count = 1;
  let modifiedString = message.split("");
  let compressed = "";
  modifiedString.map((el, i) => {
    if (el === modifiedString[i + 1]) {
      count++;
    } else {
      if (count <= 1) {
        compressed += el;
      } else if (count > 1) {
        compressed += el + count;
        count = 1;
      }
    }
  });
  return compressed;
}

// console.log(compress("aaabb"));

// --------------------------------------------------
a = [1, 2, 3, 4, 3, 2, 1];
// Find the unique element in the array that has no dupicate
//XOR: a ^ a = 0 | a ^ 0 = a
let unique = 0;
for (let num of a) {
  unique ^= num;
}
// unique;

// --------------------------------------------------
const grades = [73, 67, 38, 33];
const roundedGrades = grades.map((grade) => {
  let nextMultiple = grade;
  if (nextMultiple >= 38) {
    for (let i = 1; i <= 5; i++) {
      if ((nextMultiple + i) % 5 === 0 && nextMultiple + i - grade < 3) {
        nextMultiple += i;
        break;
      }
    }
  }
  return nextMultiple;
});
// console.log(roundedGrades);

// --------------------------------------------------
const q = 4;
const flippedNumber = q
  .toString(2)
  .padStart(32, "0")
  .split("")
  .map((el) => (el === "1" ? 0 : 1))
  .join("");
// console.log(parseInt(flippedNumber, 2));

// --------------------------------------------------
const diagonalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let primarySum = 0;
let secondarySum = 0;
const n = diagonalArray.length;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // Primary diagonal
    if (i === j) {
      primarySum += diagonalArray[i][j];
    }

    // Secondary diagonal
    if (i + j === n - 1) {
      secondarySum += diagonalArray[i][j];
    }
  }
}
const diagonalsum =
  primarySum > secondarySum
    ? primarySum - secondarySum
    : secondarySum - primarySum;
// console.log(diagonalsum);

// --------------------------------------------------
const originalArray = [1, 1, 4, 5, 8, 1, 1];
const frequencyArray = Array.from({ length: 100 }, () => 0);
originalArray.forEach((el) => frequencyArray[el]++);

// --------------------------------------------------
// Counting Values
const stepsString = "DDUUUUDD";
let count = 0;
let valley = 0;
stepsString.split("").forEach((step) => {
  let prevCount = count;
  if (step === "U") {
    count++;
    if (prevCount < 0 && count === 0) {
      valley++;
    }
  } else if (step === "D") {
    count--;
  }
});
// console.log(valley);

// -----------------------------------
// Check if a given string is pangram
let givenString = "We promptly judged antique ivory buckles for the prize";
givenString = givenString.replaceAll(/\s/g, "").toLowerCase().split("");

const charArray = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97)
);
// console.log(
//   charArray.filter((char) => !givenString.includes(char)).length > 0
//     ? "not pangram"
//     : "pangram"
// );

// -----------------------------------
const sosString = "SOSSOSSOSSOS";
let altered = 0;
for (i = 0; i < sosString.length; i += 3) {
  const [first, second, third] = sosString.slice(i, i + 3).split("");
  first !== "S" && altered++;
  second !== "O" && altered++;
  third !== "S" && altered++;
}
// console.log(altered);
