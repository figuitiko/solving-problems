const rottingFruit = (grid) => {
  const FRESH = 1
  const ROTTEN = 2
  let minutes = 0
  let fresh = 0
  const queue = []
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === FRESH) {
        fresh++
      }
      if (grid[r][c] === ROTTEN) {
        queue.push([r, c])
      }
    }
  }

  const bfs = () => {
    while (queue.length > 0 && fresh > 0) {
      const len = queue.length
      for (let i = 0; i < len; i++) {
        const curr = queue.shift()
        const [currR, currC] = curr
        for (const dir of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
          const [rDir, cDir] = dir
          const nextRow = rDir + currR
          const nextCol = cDir + currC
          if (nextRow >= 0 &&
            nextRow < grid.length &&
            nextCol >= 0 &&
            nextCol < grid[0].length &&
            grid[nextRow][nextCol] === FRESH) {
            grid[nextRow][nextCol] = ROTTEN
            queue.push([nextRow, nextCol])
            fresh -= 1
          }
        }
      }
      minutes += 1
    }
  }
  bfs()
  return fresh === 0 ? minutes : -1
}

const grid = [
  [1, 1, 0],
  [0, 1, 1],
  [1, 1, 2]

]

console.log(rottingFruit(grid))
