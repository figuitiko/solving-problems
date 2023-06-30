const sumOddNumbers = (n) => {
  const resultArr = []
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      resultArr.push(i)
      continue
    }
    for (let j = 0; j < i; j++) {
      resultArr.push(resultArr[resultArr.length - 1] + 2)
    }
  }
  return resultArr.slice(-n).reduce((a, b) => a + b)
}

console.log(sumOddNumbers(5))
console.log(sumOddNumbers(42))
