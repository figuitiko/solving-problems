const numberOfWaysToTraverseGraph = (width, height) => {
  const dp = Array(width + 1).fill().map(() => Array(height + 1).fill(0))
  dp[1][1] = 1
  for (let i = 0; i <= width; i++) {
    for (let j = 0; j <= height; j++) {
      const current = dp[i][j]
      if (j + 1 <= height) dp[i][j + 1] += current
      if (i + 1 <= width) dp[i + 1][j] += current
    }
  }
  return dp[width][height]
}
console.log(numberOfWaysToTraverseGraph(4, 3))

const numberOfWaysToTraverseGraph1 = (width, height, memo = {}) => {
  if (memo[+width + height]) return memo[+width + height]
  if ((width === 1) && (height === 1)) return 1
  if ((width === 0) || (height === 0)) return 0
  const result = numberOfWaysToTraverseGraph1(width - 1, height) + numberOfWaysToTraverseGraph1(width, height - 1)
  memo[+width + height] = result
  return result
}
console.log(numberOfWaysToTraverseGraph1(4, 3))
