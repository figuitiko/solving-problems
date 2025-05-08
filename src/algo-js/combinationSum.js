const combinationSum = (candidates, target) => {
  const res = []
  candidates.sort((a, b) => a - b)
  const recurse = (currSum, currArr, index) => {
    if (currSum < 0) {
      return
    }
    if (currSum === 0) {
      res.push([...currArr])
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
  return res
}
console.log(combinationSum([2, 3, 6, 7], 7))
