function maxSumSubarray (arr, k) {
  let maxSum = -Infinity
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0
    for (let j = i; j < i + k; j++) {
      sum += arr[j]
    }
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}

console.log(maxSumSubarray([4, 5, -3, 6, 7, -4], 3))

function maxSumSubarray1 (arr, k) {
  let maxSum = 0; let windowSum = 0

  // First window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i]
  }
  maxSum = windowSum

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k] // Remove leftmost, add new rightmost
    maxSum = Math.max(maxSum, windowSum)
  }

  return maxSum
}

console.log(maxSumSubarray1([4, 5, -3, 6, 7, -4], 3))
