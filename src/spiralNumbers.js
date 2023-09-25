const spiralNumbers = (n) => {
  const newMatrix = new Array(n).fill(0).map(item => new Array(n).fill(0))
  let endVal = n
  let initiator = 0
  let j = 1
  while (initiator <= endVal) {
    for (let i = initiator; i < endVal; i++) {
      newMatrix[initiator][i] = j
      j++
    }
    for (let i = initiator + 1; i < endVal; i++) {
      newMatrix[i][endVal - 1] = j
      j++
    }
    for (let i = endVal - 2; i >= initiator; i--) {
      newMatrix[endVal - 1][i] = j
      j++
    }
    for (let i = endVal - 2; i > initiator; i--) {
      newMatrix[i][initiator] = j
      j++
    }
    initiator++
    endVal--
  }
  return newMatrix
}

console.log(spiralNumbers(5))
