
const countingValleys = (steps, path) => {
  let valleys = 0
  let level = 0
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'U') {
      level++
      if (level === 0) {
        valleys++
      }
    } else {
      level--
    }
  }
  return valleys
}
console.log(countingValleys(9, 'DDUUDDUDUUUD'))
