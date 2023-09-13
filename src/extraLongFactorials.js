const memo = {}
const extraLongFactorials = (n) => {
  const result = factorial(n)
  // result = Math.floor(result);
  // result = BigInt(result);
  process.stdout.write(result.toString())
}
const factorial = (n) => {
  n = BigInt(n)
  if (n in memo) return memo[n]
  if (n == 1) return 1
  const result = n * factorial(n - BigInt(1))
  memo[n] = BigInt(result)
  return BigInt(result)
}
// console.log(extraLongFactorials(25))
const factorial1 = (n) => {
  let fact = BigInt(1)
  for (let i = 1; i <= n; i++) {
    fact = fact * BigInt(i)
  }
  return fact
}
extraLongFactorials(25)
