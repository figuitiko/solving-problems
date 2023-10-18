/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

const superDigit = (n, k) => {
  const totalN = n.repeat(k)
  const calDigit = (d) => {
    if (d.length === 1) return d
    const total = d.split('').map(BigInt).reduce((a, b) => BigInt(a) + BigInt(b), 0)
    const result = calDigit(total.toString())
    return result
  }
  return calDigit(totalN)
}

console.log(superDigit('9875', 4))
console.log(superDigit('148148148', 4))
