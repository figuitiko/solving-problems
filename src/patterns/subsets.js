// Problem: Generate all subsets of a set.

function subsets (nums) {
  const result = [[]]
  for (const num of nums) {
    const newSubsets = result.map(subset => [...subset, num])
    result.push(...newSubsets)
  }
  return result
}

console.log(subsets([1, 2, 3]))

const subSets1 = (nums) => {
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

console.log(subSets1([1, 2, 3]))
