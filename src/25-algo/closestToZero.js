const closestToZero = (nums) => {
  nums.sort((a, b) => a - b)
  console.log(nums)
  const left = 0
  const right = nums.length - 1
  const mid = Math.floor((right + left) / 2)
  // while (left <= right) {
  //   if (nums[mid] >= 0) {
  //     return nums[mid]
  //   }
  // }
}

console.log(closestToZero([-5, -6 - 7, -8, -4, -3, 2]))
