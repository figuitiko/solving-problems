const riverSizes = (matrix) => {
  const res = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        res.push(DFS(0, i, j))
      }
    }
  }
  function DFS (size, i, j) {
    if (i < 0 || j < 0 || i === matrix.length || j === matrix[0].length) return 0
    if (matrix[i][j] === 0) return 0

    matrix[i][j] = 0

    const right = DFS(size, i, j + 1)
    const bottom = DFS(size, i + 1, j)
    const left = DFS(size, i, j - 1)
    const top = DFS(size, i - 1, j)

    size += right
    size += bottom
    size += left
    size += top
    size++
    return size
  }
  return res
}

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]
console.log(riverSizes(matrix))
