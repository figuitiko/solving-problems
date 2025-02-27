const findThreeLargestNumbers = (array) => {
  const result = []
  while (result.length < 3) {
    const max = Math.max(...array)
    result.unshift(max)
    array.splice(array.indexOf(max), 1)
  }
  return result
}

console.log(findThreeLargestNumbers([10, 5, 9, 10, 12]))
