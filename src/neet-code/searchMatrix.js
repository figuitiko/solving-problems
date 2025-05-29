const searchMatrix = (matrix, target) => {
  for (const row of matrix) {
    let left = 0
    let right = row.length - 1
    if (target > row[right]) {
      continue
    }
    while (left <= right) {
      const mid = Math.floor((right + left) / 2)
      if (row[mid] === target) {
        return true
      }
      if (row[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
  }
  return false
}
const matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]]
console.log(searchMatrix(matrix, 10))
