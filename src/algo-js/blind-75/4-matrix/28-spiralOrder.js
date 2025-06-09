const spiralOrder = (matrix) => {
  let left = 0
  let top = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  const size = matrix.length * matrix[0].length
  const nums = []
  while (nums.length < size) {
    for (let i = left; i <= right && nums.length < size; i++) {
      nums.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom && nums.length < size; i++) {
      nums.push(matrix[i][right])
    }
    right--
    for (let i = right; i >= left && nums.length < size; i--) {
      nums.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top && nums.length < size; i--) {
      nums.push(matrix[i][left])
    }
    left++
  }
  return nums
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(spiralOrder(matrix))
