const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  return nums
}

console.log(bubbleSort([4, 7, 8, 3, 2, 9]))
