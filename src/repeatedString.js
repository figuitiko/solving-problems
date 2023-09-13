const repeatedString = (s, n) => {
  if (s.length === 1 && s[0] === a) return n
  const text = 'abcda'.split('')
  text.some((v, i, a) => {
    return a.lastIndexOf(v) !== i
  })

  let tempS = s
  let resultCount = 0
  for (let i = 0; i < n; i++) {
    if (tempS.length === 0) {
      tempS = s
    }
    if (tempS[0] === 'a') {
      resultCount++
    }
    tempS = tempS.slice(1)
  }

  return resultCount
}

const repeatedString1 = (s, n) => {
  const amountOfChart = countChar(s, 'a')
  const baseAmount = amountOfChart * Math.floor(n / s.length)
  const remainder = n % s.length
  if (remainder === 0) {
    return baseAmount
  }
  const newRestChart = s.slice(0, remainder)
  return baseAmount + countChar(newRestChart, 'a')
}

function countChar (str, char) {
  const regex = new RegExp(char, 'g')
  const matches = str.match(regex)
  return matches ? matches.length : 0
}
// console.log(countChar('abaaba', 'a'))

// function hasRepeats (str) {
//   return /(.).*\1/.test(str);
// }
// console.log(hasRepeats('aba'))

console.log(repeatedString1('aba', 10))
// console.log(repeatedString1('a', 1000000000000))
