const arrayMaximalAdjacentDifference = (inputArray) => {
  let maxAdjacent = -Infinity
  for (let i = 1; i < inputArray.length; i++) {
    const curr = inputArray[i]
    const prev = inputArray[i - 1]
    const diff = curr > prev ? curr - prev : prev - curr
    if (diff > maxAdjacent) {
      maxAdjacent = diff
    }
  }
  return maxAdjacent
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))
