class Solution {
  /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
  combinationSum (nums, target) {
    const res = []
    const recurse = (currArr, currSum, idx) => {
      if (currSum === target) {
        res.push([...currArr])
        return
      }

      if (currSum > target) return
      for (let i = idx; i < nums.length; i++) {
        currArr.push(nums[i])
        recurse(currArr, currSum + nums[i], i)
        currArr.pop()
      }
    }
    recurse([], 0, 0)
    return res
  }

  combinationSum2 (nums, target) {
    const res = []
    const seen = new Set()
    nums.sort((a, b) => a - b)
    const recurse = (currArr, currSum, idx) => {
      if (currSum === target && !seen.has(JSON.stringify(currArr))) {
        // seen.add(JSON.stringify(currArr))
        res.push([...currArr])
        return
      }

      if (currSum > target) return
      for (let i = idx; i < nums.length; i++) {
        currArr.push(nums[i])
        recurse(currArr, currSum + nums[i], i + 1)
        currArr.pop()
      }
    }
    recurse([], 0, 0)
    return res
  }

  permutations (nums) {
    const res = []
    const recurse = (currArr) => {
      if (currArr.length === nums.length) {
        res.push([...currArr])
        return
      }
      for (let i = 0; i < nums.length; i++) {
        if (currArr.includes(nums[i])) continue
        currArr.push(nums[i])
        recurse(currArr)
        currArr.pop()
      }
    }
    recurse([], 0)
    return res
  }
}
const solution = new Solution()

// console.log(solution.combinationSum([2, 5, 6, 9], 9))
// console.log(solution.combinationSum2([9, 2, 2, 4, 6, 1, 5], 8))
console.log(solution.permutations([1, 2, 3]))
