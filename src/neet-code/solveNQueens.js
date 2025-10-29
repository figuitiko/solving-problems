const solveNQueens = (n) => {
  const matrix = Array.from({ length: n }, () => Array(n).fill('.'))
  const isValid = (r, c) => {
    for (let i = r - 1; i >= 0; i--) {
      if (matrix[i][c] === 'Q') return false
    }
    for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
      if (matrix[i][j] === 'Q') return false
    }
    for (let i = r - 1, j = c + 1; i >= 0 && j < matrix.length; i--, j++) {
      if (matrix[i][j] === 'Q') return false
    }
    return true
  }
  const res = []
  const dfs = (r, matrix) => {
    if (r === n) {
      res.push(matrix.map((item) => item.join('')))
      return
    }
    for (let c = 0; c < matrix.length; c++) {
      if (isValid(r, c)) {
        matrix[r][c] = 'Q'
        dfs(r + 1, matrix)
        matrix[r][c] = '.'
      }
    }
  }
  dfs(0, matrix)
  return res
}

console.log(solveNQueens(4))
