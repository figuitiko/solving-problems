const permutationRecursive = (nums) => {
  const result = [[]]
  function recursive (index, currArr) {
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

console.log(permutationRecursive([1, 2]))
