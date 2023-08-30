const weightedUniformStrings = (s, queries) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetWeight = {}
  const sumValArr = []
  const result = []
  for (let i = 1; i <= alphabet.length; i++) {
    alphabetWeight[alphabet[i - 1]] = i
  }
  let currentStr = ''
  for (let i = 0; i < s.length; i++) {
    currentStr = currentStr[currentStr.length - 1] === s[i] ? currentStr += s[i] : s[i]
    const currentStrArr = currentStr.split('')
    const sumVal = currentStrArr.reduce((acc, curr) => acc + alphabetWeight[curr], 0)
    sumValArr.push(sumVal)
  }
  for (const val of queries) {
    if (sumValArr.includes(val)) {
      result.push('Yes')
    } else {
      result.push('No')
    }
  }
  return result
}

const weightedUniformStrings1 = (s, queries) => {
  const alphabetWeight = new Map()
  const sumValSet = new Set()
  const result = []

  for (let i = 0; i < 26; i++) {
    const alphabetChar = String.fromCharCode(97 + i)
    alphabetWeight.set(alphabetChar, i + 1)
  }

  let currentStr = ''
  for (let i = 0; i < s.length; i++) {
    currentStr = currentStr[currentStr.length - 1] === s[i] ? currentStr + s[i] : s[i]
    const sumVal = currentStr.length * alphabetWeight.get(s[i])
    sumValSet.add(sumVal)
  }

  for (const val of queries) {
    result.push(sumValSet.has(val) ? 'Yes' : 'No')
  }

  return result
}

console.log(weightedUniformStrings('aaabbbbcccddd', [9, 7, 8, 12, 5]))
console.log(weightedUniformStrings1('aaabbbbcccddd', [9, 7, 8, 12, 5]))
