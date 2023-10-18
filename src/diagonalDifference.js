const diagonalDifference = (arr) => {
  let sumFirstDiag = 0
  let sumSecondDiag = 0
  let iteratorRight = arr.length - 1
  let iteratorLeft = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        sumFirstDiag += arr[i][j]
      }
      if (i === iteratorLeft && j === iteratorRight) {
        sumSecondDiag += arr[i][j]
      }
    }
    iteratorRight--
    iteratorLeft++
  }
  return Math.abs(sumFirstDiag - sumSecondDiag)
}
const diag = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]
console.log(diagonalDifference(diag))
