/*
 * Complete the 'stones' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER a
 *  3. INTEGER b
 */
// const stones = (n, a, b) => {
// }

function stones1 (n, a, b) {
  const A = Math.min(a, b)
  const B = a + b - A
  const val = A * (n - 1)

  // An - A - Ai + Bi -> A(n - 1) - i(A - B)
  return Array.from({ length: n }, (item, i) => val - (i * (A - B)))
}
console.log(stones1(5, 3, 5))
// console.log(stones(2, 2, 3))
