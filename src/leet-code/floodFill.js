const floodFill = (image, sr, sc, color) => {
  const colorPos = image[sr][sc]
  const visited = new Set()
  const dfs = (r, c) => {
    if (r < 0 || r > image.length - 1 || c < 0 || c > image[0].length - 1 || image[r][c] !== colorPos || visited.has(`${r}${c}`)) return
    image[r][c] = color
    visited.add(`${r}${c}`)
    dfs(r + 1, c)
    dfs(r - 1, c)
    dfs(r, c + 1)
    dfs(r, c - 1)
  }

  dfs(sr, sc)

  return image
}

const image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1]
]
const image1 = [
  [0, 0, 0],
  [0, 0, 0]
]
console.log(floodFill(image, 1, 1, 2))
console.log(floodFill(image1, 0, 0, 0))
