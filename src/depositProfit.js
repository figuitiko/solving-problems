const depositProfit = (deposit, rate, threshold) => {
  let amount = deposit
  let year = 0
  while (amount < threshold) {
    const percent = rate / 100 * amount
    amount = amount + percent
    year++
  }
  return year
}

console.log(depositProfit(100, 20, 170))
console.log(depositProfit(100, 20, 170))
