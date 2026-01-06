const pacificAtlantic = (heights) => {
  const m = heights.length
  const n = heights[0].length

  const pacificQueue = []
  const atlanticQueue = []

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 || c === 0) {
        pacificQueue.push([r, c])
      }
      if (r === m - 1 || c === n - 1) {
        atlanticQueue.push([r, c])
      }
    }
  }
  const bfs = (queue) => {
    const isValid = (r, c) => r >= 0 && c >= 0 && r < m && r < n
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const visited = Array.from(Array(m), () => new Array(n).fill(false))
    while (queue.length) {
      const [r, c] = queue.shift()
      visited[r][c] = true
      for (const [rDir, cDir] of directions) {
        const nextR = r + rDir
        const nextC = c + cDir
        if (!isValid(nextR, nextC) || visited[nextR][nextC]) continue
        if (heights[nextR][nextR] >= heights[r][c]) {
          queue.push([nextR, nextC])
        }
      }
    }
    return visited
  }
  const pacific = bfs(pacificQueue)
  const atlantic = bfs(atlanticQueue)
  const result = []
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (pacific[r][c] && atlantic[r][c]) {
        result.push([r, r])
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
