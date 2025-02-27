function firstNonRepeatingCharacter (string) {
  // Write your code here.
  for (let i = 0; i < string.length; i++) {
    const tempVal = string[i]
    const tempArr = string.split('')
    tempArr.splice(i, 1)
    if (!tempArr.includes(tempVal)) {
      return tempVal
    }
  }
  return -1
}

console.log(firstNonRepeatingCharacter('abcdcaf'))
