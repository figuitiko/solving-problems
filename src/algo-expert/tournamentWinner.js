const tournamentWinner = (competitions, results) => {
  const freqMap = new Map()
  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i]
    if (!freqMap.has(home)) {
      freqMap.set(home, results[i] === 1 ? 1 : 0)
    } else {
      freqMap.set(home, freqMap.get(home) + (results[i] === 1 ? 1 : 0))
    }
    if (!freqMap.has(away)) {
      freqMap.set(away, results[i] === 0 ? 1 : 0)
    } else {
      freqMap.set(away, freqMap.get(away) + (results[i] === 0 ? 1 : 0))
    }
  }
  let max = -Infinity
  let result = ''
  for (const [key, value] of freqMap) {
    if (value > max) {
      max = value
      result = key
    }
  }
  return result
}
const competitionsArr = [
  ['HTML', 'c#'],
  ['c#', 'Python'],
  ['Python', 'HTML']
]
const result = [0, 0, 1]
console.log(tournamentWinner(competitionsArr, result))
