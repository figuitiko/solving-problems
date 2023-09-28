const factorial = (n) => {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

const factorial1 = (n) => {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}
console.log(factorial1(4))
