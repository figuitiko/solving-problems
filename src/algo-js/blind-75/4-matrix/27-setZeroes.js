const setZeroes = (matrix) => {
  const zeroPos = []
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        zeroPos.push([r, c])
      }
    }
  }
  for (let i = 0; i < zeroPos.length; i++) {
    const [row, col] = zeroPos[i] // [1,1]
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][col] = 0
    }
    for (let c = 0; c < matrix[0].length; c++) {
      matrix[row][c] = 0
    }
  }
  return matrix
}

const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
console.log(setZeroes(matrix))
