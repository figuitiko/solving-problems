const solution = (n) => {
  const numberStr = n.toString()
  if (numberStr.length % 2 !== 0) {
    return false
  }
  const firstHalfSum = numberStr.slice(0, numberStr.length / 2).split('').map(Number).reduce((a, b) => a + b)
  const secondHalfSum = numberStr.slice(numberStr.length / 2).split('').map(Number).reduce((a, b) => a + b)
  return firstHalfSum === secondHalfSum
}

console.log(solution(1230))
