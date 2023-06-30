const palindromeRearranging = (inputString) => {
  //  create a frequency map
  const frequencyMap = new Map()
  for (const char of inputString) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1)
  }
  let oddChart = 0

  for (const val of frequencyMap.values()) {
    if (val % 2 !== 0) {
      oddChart++
    }
    if (oddChart > 1) {
      return false
    }
  }
  return true
}

console.log(palindromeRearranging('aabb'))
