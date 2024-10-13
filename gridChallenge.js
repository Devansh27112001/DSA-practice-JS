// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
function gridChallenge(grid) {
  const sortedGrid = [];

  for (let ele of grid) {
    sortedGrid.push(sortString(ele));
  }

  for (let i = 0; i < sortedGrid.length; i++) {
    for (let j = 0; j < sortedGrid[i].length - 1; j++) {
      if (sortedGrid[j + 1][i] < sortedGrid[j][i]) {
        return "NO";
      }
    }
  }
  return "YES";
}

function sortString(str) {
  return str.split("").sort();
}
