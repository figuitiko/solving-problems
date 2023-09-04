const digitDegree = (n) => {
  const numbStr = n.toString()
  let result = 0
  if (numbStr.length === 1) return 0
  const numArr = numbStr.split('')
  const calDig = (arr) => {
    if (arr.length === 1) return 0
    arr = arr.map(Number)
    const sumArr = arr.reduce((a, b) => a + b, 0)
    result++
    calDig(sumArr.toString().split(''))
  }
  calDig(numArr)
  return result
}

console.log(digitDegree(91))
console.log(digitDegree(100))
