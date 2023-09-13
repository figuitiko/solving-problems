/*
 * Complete the 'gridSearch' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING_ARRAY G
 *  2. STRING_ARRAY P
 */
const gridSearch = (G, P) => {
  const row = G.length
  const col = G[0].length
  const rowP = P.length
  const colP = P[0].length

  for (let i = 0; i < row - rowP + 1; i++) {
    for (let j = 0; j < col - colP + 1; j++) {
      if (G[i][j] === P[0][0]) {
        let found = true
        for (let k = 0; k < rowP; k++) {
          for (let l = 0; l < colP; l++) {
            if (G[i + k][j + l] !== P[k][l]) {
              found = false
              break
            }
          }
          if (!found) break
        }
        if (found) return 'YES'
      }
    }
  }
  return 'NO'
}
