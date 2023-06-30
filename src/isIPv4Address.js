const isIPv4Address = (inputString) => {
  const inputStringToArray = inputString.split('.').map(item => {
    if (item[0] === '0' && item.length > 1) {
      return false
    }
    if (item) {
      const numberItem = Number(item)
      if (isNaN(numberItem)) {
        return false
      }
      if (numberItem === 0) {
        return item.length > 1 ? false : numberItem
      }
      return numberItem
    }
    return false
  })
  console.log(inputStringToArray)
  if (inputStringToArray.length !== 4) {
    return false
  }
  if (inputStringToArray.find(item => item === false) === false) {
    return false
  }
  if (inputStringToArray.find(item => item > 255 || item < 0)) {
    return false
  }
  return true
}

console.log(isIPv4Address('1.1.1.1a'))
console.log(isIPv4Address('01.233.161.131'))
// console.log(isIPv4Address('172.16.254.1'))
// console.log(isIPv4Address('172.16.355.1'))
// console.log(isIPv4Address('.254.255.0'))
