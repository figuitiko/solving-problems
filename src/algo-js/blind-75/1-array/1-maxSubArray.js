const maxSubArray = (nums) => {
  let currMax = nums[0]
  let maxima = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i])
    maxima = Math.max(maxima, currMax)
  }
  return maxima
}

const maxSubArray1 = (nums) => {
  let maxSub = nums[0]
  let curSum = 0
  for (const num of nums) {
    // if (curSum < 0) {
    //   curSum = 0
    // }
    curSum += num
    maxSub = Math.max(maxSub, curSum)
  }
  return maxSub
}

console.log(maxSubArray([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))
console.log(maxSubArray1([5, 4, -1, 7, 8]))
console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
