const tribonacci = (signature, n) => {
  if (n === 0) return []
  if (signature.length > n) {
    return signature.slice(0, n)
  }
  let i = 0
  while (signature.length < n) {
    const sumToAdd = signature.slice(i).reduce((a, b) => a + b)
    signature.push(sumToAdd)
    i++
  }
  return signature
}

console.log(tribonacci([1, 1, 1], 10))
console.log(tribonacci([1, 1, 1], 1))
