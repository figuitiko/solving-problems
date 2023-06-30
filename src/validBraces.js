const validBraces = (braces) => {
  if (braces.length % 2 !== 0) return false
  const mid = braces.length / 2
  for (let i = 0; i < mid; i++) {
    if (braces.includes('()')) {
      braces = braces.replace('()', '')
    }
    if (braces.includes('{}')) {
      braces = braces.replace('{}', '')
    }
    if (braces.includes('[]')) {
      braces = braces.replace('[]', '')
    }
  }
  if (braces) return false
  return true
}

console.log(validBraces(')(}{]['))
// console.log(validBraces('[({})](]'))
// console.log(validBraces('[(])'))
// console.log(validBraces('(){}[]'))
// console.log(validBraces('([{}])'))
// console.log(validBraces('()))'))
// console.log(validBraces('()'))
console.log(validBraces('([{}])'))
