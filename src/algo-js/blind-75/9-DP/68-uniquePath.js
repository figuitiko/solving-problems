const uniquePath = (m, n) => {
  const dp = Array.from(Array(m), () => new Array(n))

  for (let i = 0; i < dp.length; i++) dp[i][0] = 1
  for (let i = 0; i < dp[0].length; i++) dp[0][i] = 1

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

console.log(uniquePath(3, 2))
