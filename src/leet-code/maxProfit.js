const maxProfit = (prices) => {
  let min = prices[0]
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return profit
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
