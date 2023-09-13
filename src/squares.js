const squares = (a, b) => {
  return Math.floor(Math.sqrt(b) - Math.ceil(Math.sqrt(a))) + 1
}
const squares1 = (a, b) => {
  let squaresAmount = 0
  for (let i = a; i <= b; i++) {
    if (i > 0 && Math.sqrt(i) % 1 === 0) {
      squaresAmount++
    }
  }

  return squaresAmount
}
const squaresRecursive = (a, b, squaresAmount = 0) => {
  if (a > b) {
    return squaresAmount
  }
  if (a > 0 && Math.sqrt(a) % 1 === 0) {
    squaresAmount++
  }
  return squares1(a + 1, b, squaresAmount)
}
console.log(squaresRecursive(3, 9))
