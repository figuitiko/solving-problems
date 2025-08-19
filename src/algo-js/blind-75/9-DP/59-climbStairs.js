
const climbStairs = (n) => {
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 0; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log(climbStairs(3))
