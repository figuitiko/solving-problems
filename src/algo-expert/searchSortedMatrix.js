function searchInSortedMatrix (matrix, target) {
  // Write your code here.
  for (let r = 0; r < matrix.length; r++) {
    const col = binarySearch(matrix[r], target)
    if (col !== -1) {
      return [r, col]
    }
  }
  return [-1, -1]
}
function binarySearch (arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (target > arr[right]) {
      return -1
    }
    if (target > arr[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
]

const target = 44

console.log(searchInSortedMatrix(matrix, target))
