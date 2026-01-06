const selectionSort = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let minIdx = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j
      }
    }
    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
  }
  return nums
}

console.log(selectionSort([3, 6, 1, 4, 5, 8]))
