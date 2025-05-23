const spiralTraverse = (array) => {
  const result = []
  let startRow = 0
  let endRow = array.length - 1
  let startCol = 0
  let endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col < endCol + 1; col++) {
      result.push(array[startRow][col])
    }
    for (let row = startRow + 1; row < endRow + 1; row++) {
      result.push(array[row][endCol])
    }
    for (let col = endCol - 1; col > startCol; col--) {
      result.push(array[endRow][col])
    }
    for (let row = endRow; row > startRow; row--) {
      result.push(array[row][startCol])
    }
    startRow++
    endRow--
    startCol++
    endCol--
  }
  return result
}
function spiralTraverse1 (array) {
  const result = []
  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result)
  return result
}

function spiralFill (array, startRow, endRow, startCol, endCol, result) {
  if (startRow > endRow || startCol > endCol) return

  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col])
  }

  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol])
  }

  if (startRow < endRow) {
    for (let col = endCol - 1; col >= startCol; col--) {
      result.push(array[endRow][col])
    }
  }

  if (startCol < endCol) {
    for (let row = endRow - 1; row > startRow; row--) {
      result.push(array[row][startCol])
    }
  }

  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result)
}

const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]

console.log(spiralTraverse(array))
console.log(spiralTraverse1(array))
