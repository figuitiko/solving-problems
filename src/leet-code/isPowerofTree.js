const isPowerOfThree = (n) => {
  if (n % 3 !== 0) return false
  if (n === 3) return true
  return isPowerOfThree(n / 3)
}

console.log(isPowerOfThree(27))
