function climbingLeaderboardGPT (ranked, player) {
  const result = []
  const uniqueRanked = [...new Set(ranked)]
  let j = uniqueRanked.length - 1

  for (let i = 0; i < player.length; i++) {
    while (j >= 0 && player[i] >= uniqueRanked[j]) {
      j--
    }
    result.push(j + 2)
  }

  return result
}

console.log(climbingLeaderboardGPT([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))
// console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));
