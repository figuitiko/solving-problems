// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations (n, c) {
  let min = Number.MAX_SAFE_INTEGER
  let max = 0
  for (let i = 0; i < n; i++) {
    min = Number.MAX_SAFE_INTEGER

    for (let j = 0; j < c.length; j++) {
      if (Math.abs(i - c[j]) < min) {
        min = Math.abs(i - c[j])
      }
    }

    if (min > max) {
      max = min
    }
  }
  return max
}

console.log(flatlandSpaceStations(5, [1, 3, 4]))
