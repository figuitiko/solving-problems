const removeIslands = (matrix) => {
  const dfs = (pos, visited) => {
    const [r, c] = pos
    const matrixVal = matrix[r][c]
    if (matrixVal === 1 && (r >= matrix[0].length - 1 || c >= matrix.length - 1)) {
      visited = []
      return
    }
    if (matrixVal === 0) {
      visited.forEach(item => {
        const [rVal, cVal] = item
        matrix[rVal][cVal] = 0
      })
    }
    visited.push(pos)
    const up = [r - 1, c]
    const down = [r + 1, c]
    const left = [r, c - 1]
    const right = [r, c + 1]
    dfs(up, visited)
    dfs(down, visited)
    dfs(left, visited)
    dfs(right, visited)
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      dfs([r, c], [])
    }
  }
  return matrix
}
const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1]
]
// console.log(removeIslands(matrix))

const REACHABLE = -1
const UNKNOWN = 1

function removeIslands1 (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  const traverseNeighbors = (row, col) => {
    if (row < 0 || row === rows || col < 0 || col === cols || matrix[row][col] !== UNKNOWN) {
      return
    }
    matrix[row][col] = REACHABLE
    traverseNeighbors(row - 1, col)
    traverseNeighbors(row + 1, col)
    traverseNeighbors(row, col - 1)
    traverseNeighbors(row, col + 1)
  }

  for (let row = 0; row < rows; row++) {
    traverseNeighbors(row, 0)
    traverseNeighbors(row, cols - 1)
  }

  for (let col = 1; col < cols - 1; col++) {
    traverseNeighbors(0, col)
    traverseNeighbors(rows - 1, col)
  }

  return matrix.map(row => row.map(val => (val === REACHABLE) ? 1 : 0))
}

console.log(removeIslands1(matrix))
