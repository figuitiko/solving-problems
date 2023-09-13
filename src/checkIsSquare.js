const checkIsSquare = (s) => {
  let squareSum = []
  let diag1 = []
  let diag2 = []
  let idx1 = 0
  let idx2 = s.length - 1
  for (const val of s) {
    const row = val.reduce((curr, next) => curr + next)
    squareSum.push(row)
    diag1.push(val[idx1])
    diag2.push(val[idx2])
    idx1++
    idx2--
  }
  diag1 = diag1.reduce((curr, next) => curr + next)
  diag2 = diag2.reduce((curr, next) => curr + next)
  squareSum = [...squareSum, diag1, diag2]

  return squareSum.every(val => val === squareSum[0])
}
