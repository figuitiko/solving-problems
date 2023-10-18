const sortedSquare = (array) => {
  return array.map(item => Math.abs(item ** 2)).sort((a, b) => a - b)
}

console.log(sortedSquare([1, 2, 3, 4, 5, 6, 7, 8, 9]))
