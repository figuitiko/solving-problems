const allLongestStrings = (inputArray) => {
  const maxArr = []
  let maxVal = 0
  for (const val of inputArray) {
    if (val.length > maxVal) {
      maxVal = val.length
    }
  }
  for (const val of inputArray) {
    if (val.length === maxVal) {
      maxArr.push(val)
    }
  }
  return maxArr
}
console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']))
