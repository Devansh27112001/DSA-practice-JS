// Count the vowels
const string = "HEY js. You are Amazing";
const vowels = ["a", "e", "i", "o", "u"];
const countVowels = string
  .toLowerCase()
  .split("")
  .filter((character) => vowels.includes(character)).length;
console.log(countVowels);

// Count the occurence of each character
const string1 = "hare krishna hare krishna hare hare";
const object = {};

const charCount = [...string1]
  .filter((character) => character !== " ")
  .reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, object);

charCount;

// Objects deep copy
const persondata = {
  name: "Devansh",
  age: 55,
  details: {
    religion: "Hindu",
  },
};
persondata;

// const copyPersonData = Object.assign({}, persondata);
// Creates a shallow copy
const changeObject = (obj) => {
  const newObject = { ...obj };
  newObject.details.religion = 63;
  return newObject;
};
const copyPersonData = changeObject(persondata);

copyPersonData;
persondata;

// Event loop and microtask loop
console.log("Devansh1");
setTimeout(() => console.log("Timer 1"), 0);
console.log("Devansh");

//
const data = [
  {
    name: "Devansh",
    age: 55,
  },
  {
    name: "Meghana",
    age: 25,
  },
  {
    name: "Shubham",
    age: 35,
  },
];

const headers = Object.keys(data[0]).map((key) => {
  return {
    label: key,
    key,
  };
});
console.log(headers);
