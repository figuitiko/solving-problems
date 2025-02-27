const missingNumbers = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []
  let i = 0
  while (i < nums.length) {
    if (i < nums.length && nums[i + 1] - nums[i] !== 1) {
      result.push(nums[i] + 1)
    }
    i++
  }
  return result
}

console.log(missingNumbers([1, 4, 3]))
