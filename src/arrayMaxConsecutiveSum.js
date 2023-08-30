const arrayMaxConsecutiveSum = (inputArray, k) => {
  let maxSum = 0
  let idx = 0
  while (idx <= inputArray.length - 1) {
    const temPArr = k ? inputArray.slice(idx, k) : inputArray.slice(idx, k)
    const sum = temPArr.length > 0 ? temPArr.reduce((acc, curr) => acc + curr) : 0
    if (sum > maxSum) {
      maxSum = sum
    }
    idx++
    k = k <= inputArray.length - 1 ? k + 1 : null
  }

  return maxSum
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))
// console.log(arrayMaxConsecutiveSum([1, 3, 2, 4], 3))

const arrayMaxConsecutiveSum1 = (inputArray, k) => {
  let maxSum = 0
  for (let i = 0; i < inputArray.length; i++) {
    const temPArr = inputArray.slice(i, i + k)
    const sum = temPArr.length > 0 ? temPArr.reduce((acc, curr) => acc + curr) : 0
    if (sum > maxSum) {
      maxSum = sum
    }
  }
  return maxSum
}

console.log(arrayMaxConsecutiveSum1([1, 3, 2, 4], 3))
