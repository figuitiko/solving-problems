const camelCaseBreaker = (string) => {
  const result = []
  let temStr = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result.push(temStr)
      temStr = string[i]
      continue
    }
    temStr += string[i]
  }
  result.push(temStr)
  return result.join(' ')
}

// console.log(camelCaseBreaker('camelCasingTest'))
// console.log(camelCaseBreaker('identifier'))
console.log(camelCaseBreaker('useGreatLookOwn'))
