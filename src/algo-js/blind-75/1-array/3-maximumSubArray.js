const maximumSubArray = (nums) => {
  let currMax = nums[0]
  let maxima = nums[0]
  // const currMaxArr = []
  // const maximaArr = []

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i])
    // currMaxArr.push(currMax)
    maxima = Math.max(maxima, currMax)
    // maximaArr.push(maxima)
  }
  return maxima
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
