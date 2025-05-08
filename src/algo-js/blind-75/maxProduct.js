const maxProduct = (nums) => {
  let prevMax = nums[0]
  let prevMin = nums[0]
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin)
    const currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin)
    prevMax = currMax
    prevMin = currMin
    result = Math.max(result, currMax)
  }
  return result
}

console.log(maxProduct([2, 3, -2, 4]))
