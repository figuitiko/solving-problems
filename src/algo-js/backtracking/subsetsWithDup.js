const subsetsWithDup = (nums) => {
  const res = [[]]
  nums.sort((a, b) => a - b)
  const dfs = (nums, res, curArr, start) => {
    for (let i = start; i < nums.length; i++) {
      if (i === start || nums[i] !== nums[i - 1]) {
        curArr.push(nums[i])
        res.push([...curArr])
        dfs(nums, res, curArr, i + 1)
        curArr.pop()
      }
    }
  }
  dfs(nums, res, [], 0)
  return res
}

console.log(subsetsWithDup([1, 2, 2]))
