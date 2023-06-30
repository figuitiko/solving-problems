
const allPermutations = (nums, arr = [], res = []) => {
  if (nums.length === 0) res.push([...arr])
  for (let i = 0; i < nums.length; i++) {
    const rest = nums.filter((
      _, index
    ) => index !== i)
    arr.push(nums[i])
    allPermutations(rest, arr, res)
    arr.pop()
  }
  return res
}

console.log(allPermutations([1, 2, 3]))
