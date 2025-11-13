const islandsAndTreasure = (grid) => {
  const ROWS = grid.length
  const COLS = grid[0].length
  const visit = new Set()
  const q = []

  const addCell = (r, c) => {
    if (Math.min(r, c) < 0 || r === ROWS || c === COLS || visit.has(r + ',' + c) || grid[r][c] === -1) return
    visit.add(r + ',' + c)
    q.push([r, c])
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 0) {
        q.push([r, c])
        visit.add(r + ',' + c)
      }
    }
  }
  let dist = 0
  while (q.length) {
    for (let i = q.length; i > 0; i--) {
      const [r, c] = q.shift()
      grid[r][c] = dist
      addCell(r + 1, c)
      addCell(r - 1, c)
      addCell(r, c + 1)
      addCell(r, c - 1)
    }
    dist += 1
  }
  return grid
}

const input = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647]
]

console.log(islandsAndTreasure(input))
