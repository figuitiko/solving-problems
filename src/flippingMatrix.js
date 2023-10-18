const solution = (matrix) => {
  let result = 0
  const n = matrix.length / 2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const maxValArr = Math.max(
        matrix[i][j],
        matrix[i][(2 * n - 1) - j],
        matrix[(2 * n - 1) - i][j],
        matrix[(2 * n - 1) - i][(2 * n - 1) - j]
      )
      result += maxValArr
    }
  }
  return result
}
const matrixSample = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
]

console.log(solution(matrixSample))
