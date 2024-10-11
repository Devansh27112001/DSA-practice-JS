let count = 0;
let password = "AUzs-nV";
const n = password.length;
if (!password.match(/[A-Z]/g)) {
  console.log("Capital letter not found");
  count++;
}

if (!password.match(/[a-z]/g)) {
  console.log("Lower case letter not found");
  count++;
}

if (!password.match(/\d/g)) {
  console.log("Number not found");
  count++;
}

if (!password.match(/[!@#$%^&*()\-\+]/g)) {
  console.log("Special character not found");
  count++;
}

while (n + count < 6) {
  count++;
}
console.log(count);
