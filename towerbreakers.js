// Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows:

// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x  and y evenly divides x.
// If the current player is unable to make a move, they lose the game.
const n = 2;
const m = 4;

const towerBreakers = (n, m) => {
  if (m === 1 || n % 2 === 0) {
    return 2;
  }
  return 1;
};
