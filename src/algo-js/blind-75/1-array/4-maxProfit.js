const maxProfit = (prices) => {
  let curMin = prices[0]
  let curMax = 0
  for (let i = 0; i < prices.length; i++) {
    curMin = Math.min(prices[i], curMin)
    curMax = Math.max(curMax, prices[i] - curMin)
  }
  return curMax
}
const maxProfit1 = (prices) => {
  let l = 0
  let r = 1
  let maxP = 0
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l]
      maxP = Math.max(maxP, profit)
    } else {
      l = r
    }
    r += 1
  }
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit1([7, 1, 5, 3, 6, 4]))
