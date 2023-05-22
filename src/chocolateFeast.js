/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c
 *  3. INTEGER m
 */

const chocolateFeast = (n, c, m) => {
  let choc = Math.floor(n / c)
  let a = choc

  while (a >= m) {
    a = a - m + 1
    choc += 1
  }
  return choc
}

console.log(chocolateFeast(15, 3, 2))
// console.log(chocolateFeast(10, 2, 5))
// console.log(chocolateFeast(16779, 1, 5886))
