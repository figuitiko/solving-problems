const absoluteValuesSumMinimization = (a) => {
  let result = a[0]
  let min = Infinity
  for (let i = 0; i < a.length; i++) {
    const sum = a.reduce((acc, curr) => {
      return acc + Math.abs(curr - a[i])
    }, 0)
    if (sum < min) {
      min = sum
      result = a[i]
    }
  }
  return result
}
console.log(absoluteValuesSumMinimization([2, 4, 7]))
console.log(absoluteValuesSumMinimization([2, 3]))
