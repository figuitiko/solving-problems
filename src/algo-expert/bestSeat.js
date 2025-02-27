const bestSeat = (seats) => {
  const result = []
  for (let i = 2; i < seats.length - 2; i++) {
    if (seats[i] === 0) {
      const objValues = {}
      let j = i - 1
      let k = i + 1
      let left = 0
      let right = 0
      if (seats[j] !== 0) continue
      if (seats[k] !== 0) continue
      while (seats[j] === 0) {
        left++
        j--
      }
      while (seats[k] === 0) {
        right++
        k++
      }
      objValues[i] = Math.min(left, right)
      result.push(objValues)
    }
  }
  if (result.length === 0) return -1
  return result
}
console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]))

const bestSeat1 = (seats) => {
  let leftPointer = 0
  let bestSeat = -1
  let maxSpace = 0
  while (leftPointer < seats.length) {
    let rightPointer = leftPointer + 1
    while (seats[rightPointer] === 0 && rightPointer < seats.length) {
      rightPointer++
    }
    const currentMax = rightPointer - leftPointer - 1

    if (currentMax > maxSpace) {
      bestSeat = Math.floor((rightPointer + leftPointer) / 2)
      maxSpace = currentMax
    }
    leftPointer = rightPointer
  }
  return bestSeat
}
console.log(bestSeat1([1, 0, 1, 0, 0, 0, 1]))
