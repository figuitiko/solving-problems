const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0]
  let left = 0
  let right = 1
  let maxSum = nums[0]
  while (nums.length - 1 > right) {
    const currentMax = maxSum + nums[right]
    if (currentMax < maxSum) {
      left++
    }
    maxSum = Math.max(currentMax, maxSum)

    right++
  }
  return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
