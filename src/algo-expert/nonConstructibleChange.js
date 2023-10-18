const nonConstructibleChange = (coins) => {
  if (coins.length === 0) return 1
  coins.sort((a, b) => a - b)
  let amountOfChanges = 0
  console.log(coins)
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > (amountOfChanges + 1)) {
      return amountOfChanges + 1
    } else if (coins[i] <= (amountOfChanges + 1)) {
      amountOfChanges += coins[i]
    }
  }
  return amountOfChanges + 1
}
console.log(nonConstructibleChange([1, 2, 5]))
console.log(nonConstructibleChange([1, 1, 1, 1, 1]))
