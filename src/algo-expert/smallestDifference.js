const smallestDifference = (arrayOne, arrayTwo) => {
  let smallestDiff = null
  let result = []
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const absDiff = Math.abs(arrayOne[i] - arrayTwo[j])
      if (smallestDiff === null || absDiff < smallestDiff) {
        smallestDiff = absDiff
        result = [arrayOne[i], arrayTwo[j]]
      }
    }
  }
  return result
}

// console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])) // [28, 26]
console.log(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8])) // [954, 954]

const smallestDifference1 = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)
  let idxOne = 0
  let idxTwo = 0
  let smallest = Infinity
  let current = Infinity
  let smallestPair = []
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const firstNum = arrayOne[idxOne]
    const secondNum = arrayTwo[idxTwo]
    if (firstNum < secondNum) {
      current = secondNum - firstNum
      idxOne += 1
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum
      idxTwo += 1
    } else {
      return [firstNum, secondNum]
    }
    if (smallest > current) {
      smallest = current
      smallestPair = [firstNum, secondNum]
    }
  }
  return smallestPair
}
console.log(smallestDifference1([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8])) // [954, 954]
