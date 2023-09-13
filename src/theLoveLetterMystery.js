const theLoveLetterMystery = (s) => {
  if (s == palindrome(s)) return 0
  for (let i = s.length - 1; i > 0; i--) {
    for (let j = s.length - 2; j >= 0; j--) {
      // let lastItem = s[length-1];
      const temp = s.slice(0, -1)
      s = s + s[temp.length - 1]
    }
  }
  return s
}
const palindrome = (s) => {
  return s.split('').reverse().join('')
}

const palindrome1 = (s) => {
  let result = ''
  while (s !== '') {
    result += s[s.length - 1]
    s = s.slice(0, -1)
  }
  return result
}
const theLoveLetterMystery1 = (s) => {
  let del = 0
  const m = Math.ceil(s.length / 2)
  for (let i = m; i < s.length; i++) {
    const val1 = s[s.length - 1 - i]
    const val2 = s[i]
    const e1 = s.charCodeAt(s.length - 1 - i)
    const e2 = s.charCodeAt(i)
    del += Math.abs(e1 - e2)
  }
  return del
}

console.log(theLoveLetterMystery1('abcba'))
// console.log(palindrome1('cde'))
