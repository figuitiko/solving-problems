const sumUpNumbers = (inputString) => {
  let result = 0
  let current = (Number(inputString[0]) || inputString[0] === '0') ? inputString[0] : ''
  for (let i = 1; i <= inputString.length; i++) {
    if (Number(inputString[i]) || inputString[i] === '0') {
      current += inputString[i]
    } else {
      result += Number(current)
      current = ''
    }
  }

  return result
}

// console.log(sumUpNumbers('2 apples, 12 oranges'))
console.log(sumUpNumbers('there are some (12) digits 5566 in this 770 string 239'))
