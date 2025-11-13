const minDistance = (word1, word2) => {
  const m = word1.length
  const n = word2.length

  const dp = Array.from(Array(m + 1), () => new Array(n + 1).fill(0))

  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      if (word1[r - 1] === word2[c - 1]) {
        dp[r][c] = dp[r - 1][c - 1] + 1
      } else {
        dp[r][c] = Math.max(dp[r - 1][c], dp[r][c - 1])
      }
    }
  }
  const commonChar = dp[m][n]
  return word1.length - commonChar + word2.length - commonChar
}

console.log(minDistance('sea', 'eat'))
