const pacificAtlantic = (heights) => {
  const m = heights.length
  const n = heights[0].length

  const pacificQueue = []
  const atlanticQueue = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        pacificQueue.push([i, j])
      }
      if (i === m - 1 || j === n - 1) {
        atlanticQueue.push([i, j])
      }
    }
  }
  const bfs = (queue) => {
    const isValid = (x, y) => x >= 0 && y >= 0 && x < m && y < n
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const visited = Array.from(Array(m), () => new Array(n).fill(false))
    while (queue.length) {
      const [x, y] = queue.shift()
      visited[x][y] = true
      for (const dir of directions) {
        const nextX = x + dir[0]
        const nextY = y + dir[1]
        if (!isValid(nextX, nextY) || visited[nextX][nextY]) continue
        if (heights[nextX][nextY] >= heights[x][y]) {
          queue.push([nextX, nextY])
        }
      }
    }
    return visited
  }
  const pacific = bfs(pacificQueue)
  const atlantic = bfs(atlanticQueue)
  const result = []
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (pacific[x][y] && atlantic[x][y]) {
        result.push([x, y])
      }
    }
  }
  return result
}

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
]

console.log(pacificAtlantic(heights))
