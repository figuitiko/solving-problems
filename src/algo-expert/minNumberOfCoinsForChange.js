const minNumberOfCoinsForChange = (n, denoms) => {
  if (n === 0) return 0
  const dp = Array(n + 1).fill(null)
  dp[0] = []
  for (let i = 0; i <= n; i++) {
    if (dp[i] !== null) {
      for (const coin of denoms) {
        const combinations = [...dp[i], coin]
        if (!dp[i + coin] || dp[i + coin].length > combinations.length) {
          dp[i + coin] = combinations
        }
      }
    }
  }
  return !dp[n]?.length ? -1 : dp[n].length
}
// console.log(minNumberOfCoinsForChange(7, [1, 5, 10]))
// console.log(minNumberOfCoinsForChange(7, [2, 4]))
// console.log(minNumberOfCoinsForChange(7, [1, 2, 3]))

const minNumberOfCoinsForChange1 = (n, denoms) => {
  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (const coin of denoms) {
    for (let i = 0; i <= n; i++) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin])
      }
    }
  }
  return dp[n] !== Infinity ? dp[n] : -1
}
console.log(minNumberOfCoinsForChange1(7, [1, 5, 10]))
