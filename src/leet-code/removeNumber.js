const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] === val) {
      nums[i] = '_'
      ;[nums[i], nums[nums.length - 1]] = [nums[nums.length - 1], nums[i]]
      nums.splice(nums.length - 1, 1)
    }
  }
  console.log(nums)
}
console.log(removeElement([3, 2, 2, 3], 3))
