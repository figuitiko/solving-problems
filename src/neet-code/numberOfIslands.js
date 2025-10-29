const numberOfIslands = (grid) => {
  let res = 0
  const dfs = (r, c, grid) => {
    if (r < 0 || r > grid.length - 1 || c < 0 || c > grid[r].length - 1 || grid[r][c] === '0') return 0
    grid[r][c] = '0'
    dfs(r + 1, c, grid)
    dfs(r - 1, c, grid)
    dfs(r, c + 1, grid)
    dfs(r, c - 1, grid)

    return 1
  }
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        res += dfs(r, c, grid)
      }
    }
  }
  return res
}

const grid = [
  ['0', '1', '1', '1', '0'],
  ['0', '1', '0', '1', '0'],
  ['0', '1', '1', '1', '0'],
  ['0', '0', '0', '0', '0']
]

console.log(numberOfIslands(grid))
