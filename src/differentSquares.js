const differentSquares = (matrix) => {
  const setMatrix = new Set()
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      const currMatrix = [matrix[i][j], matrix[i + 1][j], matrix[i][j + 1], matrix[i + 1][j + 1]].join(',')
      setMatrix.add(currMatrix)
    }
  }
  return setMatrix.size
}
const matrix = [
  [1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1]]

console.log(differentSquares(matrix))
