const reverseNoRecursive = (str) => {
  let result = ''
  let starterPosition = str.length - 1
  while (starterPosition >= 0) {
    result += str[starterPosition]
    starterPosition--
  }
  return result
}

console.log(reverseNoRecursive('hello'))
