const sudoku = (grid) => {
  const setChecker = new Set()
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      setChecker.add(grid[i][j])
    }
    if (setChecker.size !== grid.length) {
      return false
    }
    setChecker.clear()
  }
  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      setChecker.add(grid[j][i])
    }
    if (setChecker.size !== grid.length) {
      return false
    }
    setChecker.clear()
  }
  for (let i = 0; i < grid[0].length; i += 3) {
    for (let j = i; j < 3 + i; j++) {
      for (let k = 0; k < 3; k++) {
        setChecker.add(grid[j][k])
      }
    }
    if (setChecker.size !== grid.length) {
      return false
    }
    setChecker.clear()
  }
  return true
}
const grid = [
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5]
]
console.log(sudoku(grid))
