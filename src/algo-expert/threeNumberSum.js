const threeNumberSum = (array, targetSum) => {
  array.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const tempArr = []
      const dupleSum = array[i] + array[j]
      const restArr = array.slice(j + 1)
      const targetVal = targetSum - dupleSum
      const found = restArr.includes(targetVal)
      if (found) {
        tempArr.push(array[i], array[j], targetVal)
      }
      if (tempArr.length) {
        result.push(tempArr)
      }
    }
  }
  return result
}

const threeNumberSum1 = (array, targetSum) => {
  array.sort((a, b) => a - b)
  const triplets = []
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1
    let right = array.length - 1
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right]
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++
        right--
      } else if (currentSum < targetSum) {
        left++
      } else {
        right--
      }
    }
  }
  return triplets
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
console.log(threeNumberSum1([12, 3, 1, 2, -6, 5, -8, 6], 0))
