const isDigit = (symbol) => {
  const digits = '01234567890'
  return digits.includes(symbol)
}
console.log(isDigit('-')) // return false
