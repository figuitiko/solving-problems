/*
 * Complete the 'howManyGames' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER d
 *  3. INTEGER m
 *  4. INTEGER s
 */

const howManyGames = (p, d, m, s) => {
  // Return the number of games you can buy
  let amountGames = 0
  if (s < p) return 0
  while (s >= m && p <= s) {
    s = s - p
    p = p - d
    p = p < m ? m : p
    amountGames++
  }
  console.log(amountGames)
  return amountGames
}
// howManyGames(20, 3, 6, 80)
// howManyGames(9,16, 7, 324)
// howManyGames(100,1, 1, 99)
// howManyGames(100, 19, 1, 180)
howManyGames(16, 2, 1, 9981)
