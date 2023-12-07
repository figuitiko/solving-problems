const getNthFib = (n) => {
  const recursive = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n === 0) return 0
    if (n < 2) return 1
    const result = recursive(n - 1) + recursive(n - 2)
    memo[n] = result
    return result
  }
  return recursive(n - 1)
}
console.log(getNthFib(6))

const getNthFib1 = (n) => {
  const lastTwo = [0, 1]
  let counter = 3
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}

console.log(getNthFib1(6))
