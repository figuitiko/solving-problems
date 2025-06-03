const rotateImage = (matrix) => {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  // reverse elements and move inwards
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[i[matrix.length - 1 - j]]
      matrix[matrix.length - 1 - j] = temp
    }
  }
  return matrix
}
