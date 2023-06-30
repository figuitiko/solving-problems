/*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

const fairRations = (B) => {
  let n = B.length
  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 === 0) {
      continue
    }
    B[i] = B[i] + 1
    B[i + 1] = B[i + 1] + 1
    if (B.every((item) => item % 2 === 0)) {
      return n + 1
    }
    if (n === 0) {
      return 'NO'
    }
    n = n - 2
  }
}

const fairRations1 = (B) => {
  let res = 0
  for (let i = 0; i < B.length - 1; i++) {
    if (B[i] % 2) {
      B[i + 1]++
      res += 2
    }
  }
  return B[B.length - 1] % 2 === 0 ? (res).toString() : 'NO'
}
// console.log(fairRations([2, 3, 4, 5, 6])) // 4
console.log(fairRations1([2, 3, 4, 5, 6])) // 4
