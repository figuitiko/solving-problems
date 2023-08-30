// when a given  a matrix with height equal to its width k return the sum of all the elements found in the first and second lines of the matrix
// the sum should include all the elements found in the first and all elements that are exclusive in the second Diagonal

const sumLineMatrix = (k) => {
  let sumFirstDiagonal = 0
  let sumSecondDiagonal = 0
  const setPositions = new Set()

  for (let i = 0; i < k.length; i++) {
    const stringKeys = i.toString() + i.toString()
    if (!setPositions.has(stringKeys)) {
      sumFirstDiagonal += k[i][i]
      setPositions.add(stringKeys)
    }
  }
  setPositions.clear()
  for (let i = 0; i < k.length; i++) {
    const jIdx = (k.length - 1) - i
    const stringKeys = i.toString() + jIdx.toString()
    if (!setPositions.has(stringKeys)) {
      sumSecondDiagonal += k[i][jIdx]
      setPositions.add(stringKeys)
    }
  }
  return sumFirstDiagonal + sumSecondDiagonal
}

const matrix = [
  [1, 1, 1, 1],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
  [1, 1, 1, 20]
]
const matrix1 = [
  [1, 3, 4],
  [4, 2, 6],
  [3, 2, 4]
]

console.log(sumLineMatrix(matrix))
console.log(sumLineMatrix(matrix1))
