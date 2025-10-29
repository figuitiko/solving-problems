const maxAreaOfIsLand = (grid) => {
  let max = 0
  let count = 0
  const dfs = (r, c, grid) => {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== 1) return 0
    grid[r][c] = 0
    dfs(r + 1, c, grid)
    dfs(r - 1, c, grid)
    dfs(r, c + 1, grid)
    dfs(r, c - 1, grid)
    count += 1
  }
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) {
        count = 0
        dfs(r, c, grid)
        max = Math.max(max, count)
      }
    }
  }
  return max
}
const grid = [
  [0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1]
]
const grid1 = [
  [1, 1, 1, 1, 1]
]
const grid3 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]
console.log(maxAreaOfIsLand(grid))
console.log(maxAreaOfIsLand(grid1))
console.log(maxAreaOfIsLand(grid3))
