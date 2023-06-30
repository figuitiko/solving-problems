const superReducedString = (s) => {
  if (s === '') return 'Empty String'
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      const tempS = `${s[i]}${s[i + 1]}`
      s = s.split(tempS).join('')
      result += superReducedString(s)
      return result
    }
  }
  result += s
  return result
}

console.log(superReducedString('abbc'))
console.log(superReducedString('baab'))
console.log(superReducedString('aa'))
console.log(superReducedString('aaabccddd'))
