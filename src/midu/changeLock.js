const changeLock = (current, target) => {
  let res = 0
  for (let i = 0; i < current.length; i++) {
    const currChar = parseInt(current[i])
    const tarChar = parseInt(target[i])

    const decimalCal = tarChar < currChar ? Math.abs((tarChar + 10) - currChar) : Math.abs((currChar + 10) - tarChar)

    const currVal = Math.abs(tarChar - currChar)
    res += Math.min(currVal, decimalCal)
  }
  return res
}
console.log(changeLock('0000', '9999'))
console.log(changeLock('1234', '5678'))
