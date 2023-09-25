const digitsProduct = (product) => {
  if (product === 1) return 1 // Special case: product is 1
  if (product === 0) return 10 // Special case: product is 0

  // Start with the smallest possible factor, which is 2
  const factors = []

  for (let i = 9; i >= 2; i--) {
    while (product % i === 0) {
      factors.push(i)
      product /= i
    }
  }

  // If there is a remainder, it means the product is not a combination of digits
  if (product !== 1) {
    return -1
  }

  // Sort the factors in ascending order
  factors.sort((a, b) => a - b)

  // If the factors can form a number, create that number
  if (factors.length > 0) {
    return parseInt(factors.join(''))
  }

  return -1
}

// console.log(digitsProduct(12))
// console.log(digitsProduct(19))
// console.log(digitsProduct(0))
// console.log(digitsProduct(1))
console.log(digitsProduct(450))
