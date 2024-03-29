const subSets = (nums) => {
  const result = [[]]
  const dfs = (index, current) => {
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i])
      result.push([...current])
      dfs(i + 1, current)
      current.pop()
    }
  }
  dfs(0, [])
  console.log(result.length)
  return result
}

console.log(subSets([1, 2, 3]))
