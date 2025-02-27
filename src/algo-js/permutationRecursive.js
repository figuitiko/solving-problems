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

const permutations = (nums, currArr = [], res = []) => {
  if (nums.length === 0) {
    res.push([...currArr])
    return
  }
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.filter((_, idx) => idx !== i)
    currArr.push(nums[i])
    permutations(rest, currArr, res)
    currArr.pop()
  }
  return res
}
console.log(permutations([1, 2, 3]))
