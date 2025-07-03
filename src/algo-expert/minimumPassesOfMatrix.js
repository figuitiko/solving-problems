const minimumPassesOfMatrix = (matrix) => {
  const hasNegative = true
  const negatives = []
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const currentVal = matrix[r][c]
      if (currentVal < 0) {
        negatives.push(negatives)
      }
    }
  }
}
