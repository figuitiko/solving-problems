const numberOfWaysToMakeChange = (n, denoms) => {
  const dp = Array(n + 1).fill(null)
  dp[0] = 1
  for (const denom of denoms) {
    for (let i = 1; i < n + 1; i++) {
      if (denom <= i) {
        dp[i] += dp[i - denom]
      }
    }
  }
  return dp[n]
}
console.log(numberOfWaysToMakeChange(6, [1, 5]))
