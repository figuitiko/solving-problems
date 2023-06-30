const alternatingSums = (a) => {
  const teamA = []
  const teamB = []
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamA.push(a[i])
      continue
    }
    teamB.push(a[i])
  }
  const totalTeamA = teamA.length > 0 ? teamA.reduce((a, b) => a + b) : 0
  const totalTeamB = teamB.length > 0 ? teamB.reduce((a, b) => a + b) : 0
  return [totalTeamA, totalTeamB]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternatingSums([80]))
