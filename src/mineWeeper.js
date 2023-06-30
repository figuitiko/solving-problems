// const minesWeeper = (matrix) => {

// }

function solution (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  const result = []

  for (let i = 0; i < rows; i++) {
    result.push([])
    for (let j = 0; j < cols; j++) {
      let count = 0
      // Check the neighboring cells
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          // Ignore out-of-bounds cells
          if (x === i && y === j) {
            continue
          }
          if (x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y]) {
            count++
          }
        }
      }
      result[i].push(count)
    }
  }
  return result
}

// Example usage:
const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
]

console.log(solution(matrix))

// const matrix1 = [
//   [true, false, true],
//   [false, true, false],
//   [false, false, false]
// ]

// console.log(solution(matrix1))
