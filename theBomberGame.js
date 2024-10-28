//
const grid = [".......", "...O...", "....O..", ".......", "OO.....", "OO....."];
const filledGrid = (grid) => {
  return grid.map((row) =>
    row
      .split("")
      .map((ele) => "O")
      .join("")
  );
};

const secondPattern = (grid) => {
  let newGrid = grid.map((row) => row.split("").map((el) => "O"));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "O") {
        newGrid[i][j] = ".";
        if (i > 0) {
          newGrid[i - 1][j] = ".";
        }
        if (j > 0) {
          newGrid[i][j - 1] = ".";
        }
        if (i < grid.length - 1) {
          newGrid[i + 1][j] = ".";
        }
        if (j < grid[0].length - 1) {
          newGrid[i][j + 1] = ".";
        }
      }
    }
  }
  return newGrid.map((row) => row.join(""));
};
