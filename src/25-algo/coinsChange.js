const change = (coins, amount) => {
  // Create and initialize the storage
  const combinations = new Array(amount + 1).fill(0)
  combinations[0] = 1
  // Determine the direction of smallest sub-problem
  for (let i = 0; i < coins.length; i++) {
    // Travel and fill the combinations array
    for (let j = coins[i]; j < combinations.length; j++) {
      combinations[j] += combinations[j - coins[i]]
    }
  }
  return combinations[amount]
}

console.log(change([1, 2, 3], 7))

const changeRecursive = (coins, amount, idx = 0, memo = {}) => {
  // Base cases
  if (amount === 0) return 1 // Found a valid combination
  if (amount < 0 || idx >= coins.length) return 0 // Invalid path

  // Use memoization to avoid redundant calculations
  const key = `${amount}-${idx}`
  if (memo[key] !== undefined) return memo[key]

  // Recursive cases:
  // 1. Include the current coin (stay at the same idx)
  const include = changeRecursive(coins, amount - coins[idx], idx, memo)

  // 2. Exclude the current coin (move to the next idx)
  const exclude = changeRecursive(coins, amount, idx + 1, memo)

  // Store the result in memo
  memo[key] = include + exclude

  return memo[key]
}
// console.log(changeRecursive([1, 2, 3], 7))
