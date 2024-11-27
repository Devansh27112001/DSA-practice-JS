const climbingTheLeaderBoard = (ranked, player) => {
  const uniqueRanked = [...new Set(ranked)];
  const ranks = [];
  let i = uniqueRanked.length - 1;
  player.forEach((score) => {
    while (score >= uniqueRanked[i] && i >= 0) {
      i--;
    }
    ranks.push(i + 2);
  });
  return ranks;
};

const ranks = climbingTheLeaderBoard(
  [100, 90, 90, 80, 75, 60],
  [50, 65, 77, 90, 102]
);

console.log(ranks);
