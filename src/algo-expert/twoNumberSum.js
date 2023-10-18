const twoNumberSum = (array, targetSum) => {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const rest = targetSum - array[i]
    const restArr = array.filter((_, idx) => idx !== i)
    if (restArr.indexOf(rest) !== -1) {
      result.push(...[array[i], rest])
      return result
    }
  }
  return result
}
console.log(twoNumberSum([3, 5, 11, 1, -1, 6], 10))
