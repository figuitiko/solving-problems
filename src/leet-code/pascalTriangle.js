const generate = (numRows) => {
  if (numRows.length === 1) return [[1]]
  if (numRows.length === 2) return [[1, 1]]
  const dp = Array(numRows).fill(0)
  dp[0] = [1]
  dp[1] = [1, 1]
  for (let i = 2; i < numRows; i++) {
    const beforeVal = dp[i - 1]
    const curr = []
    for (let j = 0; j <= beforeVal.length; j++) {
      if (j === 0 || j === beforeVal.length) {
        curr.push(1)
        continue
      }
      const val = beforeVal[j - 1] + beforeVal[j]
      curr.push(val)
    }
    dp[i] = curr
  }
  return dp
}

console.log(generate(5))
