const tennisSet = (score1, score2) => {
  const winner = Math.max(score1, score2)
  const loser = Math.min(score1, score2)
  if (winner > 7 || winner < 6 || winner === loser) return false
  if (winner === 6 && loser === 5) return false
  if (winner === 7 && loser < 5) return false
  return true
}
console.log(tennisSet(3, 6)) // true
