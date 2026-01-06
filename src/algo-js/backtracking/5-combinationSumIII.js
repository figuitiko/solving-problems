const combinationSum = (k, n) => {
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
console.log(combinationSum(3, 9))

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

const combinationSum1 = (candidates, target) => {
  const result = []
  candidates = candidates.sort((a, b) => a - b)
  const recurse = (currSum, currArr, index) => {
    if (currSum < 0) {
      return
    }
    if (currSum === 0) {
      result.push([...currArr])
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (currSum - candidates[i] < 0) return
      currArr.push(candidates[i])
      recurse(currSum - candidates[i], currArr, i)
      currArr.pop()
    }
  }
  recurse(target, [], 0)
  return result
}
console.log(combinationSum1([2, 3, 6, 7], 7))
