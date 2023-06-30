const avoidObstacles = (inputArray) => {
  const maxDistance = Math.max(...inputArray) + 1
  for (let i = 1; i <= maxDistance; i++) {
    let isReachedObstacle = false
    for (const val of inputArray) {
      if (val % i === 0) {
        isReachedObstacle = true
        break
      }
    }
    if (!isReachedObstacle) {
      return i
    }
  }
  return maxDistance
}

console.log(avoidObstacles([5, 3, 6, 7, 9]))
// console.log(avoidObstacles([1, 3, 5, 7, 9]))
