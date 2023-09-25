const seatsInTheater = (nCols, nRows, col, row) => {
 return (nCols - (col - 1)) * (nRows - row)
}
console.log(seatsInTheater(16, 11, 5, 3))

const maxMultiple = (divisor, bound) => {
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      return i
    }
  }
  return 1
}
console.log(maxMultiple(3, 10))
