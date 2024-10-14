// Given: A from date of the form dd-mm-yyyy and a to date of the form dd-mm-yyyy
// Return: The number of lucky dates between the two dates which are divisible by 7 and 4
// Have to check for the format ddmmyyyy is divisible by 7 and 4.
const dateFormat = (date, reverse = false) => {
  if (reverse) {
    const [year, month, day] = date.split("-");
    return [day, month, year].join("");
  }
  const [day, month, year] = date.split("-");
  return [year, month, day].join("-");
};
const fromDate = new Date(dateFormat("01-01-2024"));
const toDate = new Date(dateFormat("25-01-2024"));
let count = 0;
for (let i = fromDate; i <= toDate; i.setDate(i.getDate() + 1)) {
  const dateNumber = +dateFormat(i.toISOString().slice(0, 10), true);
  if (dateNumber % 7 === 0 && dateNumber % 4 === 0) {
    count++;
  }
}
