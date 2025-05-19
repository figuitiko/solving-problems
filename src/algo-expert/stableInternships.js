function stableInternships (interns, teams) {
  // Write your code here.
  const chosenInters = {}
  const freeInterns = Array.from({ length: interns.length }, (_, idx) => idx)
  const currentInternChoices = Array.from({ length: interns.length }, (_) => 0)
  const teamMaps = []
  for (const team of teams) {
    const rank = {}
    team.forEach((internNum, i) => {
      rank[internNum] = i
    })

    teamMaps.push(rank)
  }
  while (freeInterns.length > 0) {
    const internNum = freeInterns.pop()
    const intern = interns[internNum]
    const teamPreference = intern[currentInternChoices[internNum]]
    currentInternChoices[internNum] += 1
    if (chosenInters[teamPreference] === undefined) {
      chosenInters[teamPreference] = internNum
      continue
    }
    const previousIntern = chosenInters[teamPreference]
    const previousInterRank = teamMaps[teamPreference][previousIntern]
    const currentInterRank = teamMaps[teamPreference][internNum]
    if (currentInterRank < previousInterRank) {
      freeInterns.push(previousIntern)
      chosenInters[teamPreference] = internNum
    } else {
      freeInterns.push(internNum)
    }
  }
  console.log({ chosenInters })
  const matches = Object.entries(chosenInters).map(([teamNum, internNum]) => [internNum, Number(teamNum)])

  return matches
}

const interns = [
  [0, 1, 2],
  [1, 0, 2],
  [1, 2, 0]
]
const teams = [
  [2, 1, 0],
  [1, 2, 0],
  [0, 2, 1]
]
console.log(stableInternships(interns, teams))

// matches =[[internNum, teamNum] for teamNum, internNum in chosenInterns.items()]
// for team in teams:
//    rank = {}
//    for i, internNum in team:
//        rank[interNum] = i
//    teamMaps.append(rank)
