const palindromeRearranging = (inputString) => {
  //  create a frequency map
  const frequencyMap = new Map()
  for (const char of inputString) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1)
  }
  let oddChart = 0
  console.log(Array.from(frequencyMap.values()))
  for (const val of frequencyMap.values()) {
    if (val % 2 !== 0) {
      oddChart++
    }
    if (oddChart > 1) {
      return false
    }
  }
  console.log(oddChart)
  return true
}

// const palindromeIndex
const checkifPalindrome = (s) => {
  let i = 0
  let j = s.length - 1
  while (i <= j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}
// console.log(checkifPalindrome('ana'))

const palindromeIndex = (s) => {
  const r = s.split('').reverse().join('')
  if (s === r) return -1

  for (let i = 0; i < s.length; ++i) {
    if (s.substring(0, i) + s.substring(i + 1) === r.substring(0, s.length - 1 - i) + r.substring(s.length - i)) {
      return i
    }
  }
  return -1
}

// console.log(palindromeIndex('bebc'))
// console.log(palindromeIndex('bebc'))
// console.log(palindromeIndex('albala'))
// console.log(palindromeIndex('rama'))
console.log(palindromeIndex('baa'))
