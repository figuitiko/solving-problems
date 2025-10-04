const rotateImage = (matrix) => {
  // transpose
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix.length; c++) {
      const temp = matrix[r][c]
      matrix[r][c] = matrix[c][r]
      matrix[c][r] = temp
    }
  }
  // reverse elements and move inwards
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix.length / 2; c++) {
      const temp = matrix[r][c]
      matrix[r][c] = matrix[r][matrix.length - 1 - c]
      matrix[r][matrix.length - 1 - c] = temp
    }
  }
  return matrix
}

const matrix = [
  [1, 2, 3, 8],
  [4, 5, 6, 10],
  [7, 8, 9, 12],
  [15, 16, 7, 18]
]
console.log(rotateImage(matrix))
