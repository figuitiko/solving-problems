const divide = (dividend, divisor) => {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647
  }

  // Determine sign of result
  const isNegative = (dividend < 0) !== (divisor < 0)

  // Work with positive numbers
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let result = 0

  // Keep subtracting the largest possible multiple of divisor
  while (dividend >= divisor) {
    let temp = divisor
    let multiple = 1

    // Double temp until it would exceed dividend
    while (dividend >= (temp << 1) && (temp << 1) > 0) {
      temp <<= 1 // temp = temp * 2
      multiple <<= 1 // multiple = multiple * 2
    }

    // Subtract the largest multiple we found
    dividend -= temp
    result += multiple
  }

  return isNegative ? -result : result
}
// console.log(divide(4, 2))
// console.log(divide(10, 2))
// console.log(divide(10, 3))
console.log(divide(-1, -1))
// console.log(divide(-2147483648, -1))
