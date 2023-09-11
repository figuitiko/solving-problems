const subsets = (nums) => {
  const result = [[]]
  const recursive = (index, currArr) => {
    for (let i = index; i < nums.length; i++) {
      currArr.push(nums[i])
      result.push([...currArr])
      recursive(i + 1, currArr)
      currArr.pop()
    }
  }
  recursive(0, [])
  return result
}
console.log(subsets([1, 2, 3]))
