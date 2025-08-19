
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

const permutationsTabulation = (arr) => {
  const table = Array.from({ length: arr.length + 1 }, () => [])
  table[1] = arr.map(el => [el])
  for (let len = 2; len <= arr.length; len++) {
    for (let i = 0; i < arr.length; i++) {
      for (const partial of table[len - 1]) {
        if (!partial.includes(arr[i])) {
          table[len].push([...partial, arr[i]])
        }
      }
    }
  }
  return table[arr.length]
}

console.log(permutationsTabulation([1, 2, 3]))
