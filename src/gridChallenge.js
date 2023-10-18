const gridChallenge = (grid) => {
  grid = grid.map(item => {
    return item.split('').sort().join('')
  })
  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < grid.length; j++) {
      if (grid[j][i] < grid[j - 1][i]) {
        return 'NO'
      }
    }
  }
  return 'YES'
  // if (isValidRows(grid)) return 'YES'
}

const grid = ['hjk', 'bba', 'bab']
console.log(gridChallenge(grid))
