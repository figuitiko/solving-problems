const comnbinationSum = (k, n) => {
  const result = []
  const dfs = (index, current, total) => {
    if (total < 0 || current.length > k) return
    if (total === 0 && current.length === k) {
      result.push([...current])
    }
    for (let i = index; i <= 9; i++) {
      current.push(i)
      dfs(i + 1, current, total - i)
      current.pop()
    }
  }
  dfs(1, [], n)
  return result
}
console.log(comnbinationSum(3, 9))

const generateCombinations = (arr, k) => {
  const result = []
  const dfs = (index, current) => {
    if (current.length === k) {
      result.push([...current])
    }
    for (let i = index; i < arr.length; i++) {
      current.push(arr[i])
      dfs(i + 1, current)
      current.pop()
    }
  }
  dfs(0, [])
  return result
}

console.log(generateCombinations([1, 2, 3, 4], 3))
