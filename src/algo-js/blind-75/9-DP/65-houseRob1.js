const rob = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1
  const dp = Array(nums + 1).fill(0)

  // base cases
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }
  return dp[dp.length - 1]
}

console.log(rob([2, 7, 9, 3, 1]))
