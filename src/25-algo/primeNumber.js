const primeNumber = (n) => {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
console.log(primeNumber(1))
console.log(primeNumber(5))
console.log(primeNumber(4))
const primeNumber1 = (n) => {
  if (n < 2) return false
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
console.log(primeNumber1(1))
console.log(primeNumber1(5))
console.log(primeNumber1(4))
