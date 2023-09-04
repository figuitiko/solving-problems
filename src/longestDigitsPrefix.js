const longestDigitsPrefix = (inputString) => {
  const numberDigits = '1234567890'
  let result = ''
  for (let i = 0; inputString.length; i++) {
    if (!numberDigits.includes(inputString[i])) {
      return result
    }
    result += inputString[i]
  }
  return result
}

console.log(longestDigitsPrefix('123aaa1'))
