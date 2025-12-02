const revealMinesweeper = (board, row, column) => {
  if (board[row][column] === 'M') {
    board[row][column] = 'X'
    return board
  }
  const getNeighbors = (board, row, column) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    const neighbors = []
    for (const [directionRow, directionColumn] of directions) {
      const newRow = row + directionRow
      const newColumn = column + directionColumn
      if (newRow >= 0 && newRow < board.length && newColumn >= 0 && newColumn < board[0].length) {
        neighbors.push([newRow, newColumn])
      }
    }
    return neighbors
  }
  const neighbors = getNeighbors(board, row, column)
  let adjacentMinesCount = 0
  for (const [neighborRow, neighborColumn] of neighbors) {
    if (board[neighborRow][neighborColumn] === 'M') {
      adjacentMinesCount += 1
    }
  }
  if (adjacentMinesCount > 0) {
    board[row][column] = adjacentMinesCount.toString()
  } else {
    board[row][column] = '0'
    for (const [neighborRow, neighborColumn] of neighbors) {
      if (board[neighborRow][neighborColumn] === 'H') {
        revealMinesweeper(board, neighborRow, neighborColumn)
      }
    }
  }
  return board
}

const board = [
  ['M', 'M'],
  ['H', 'H'],
  ['H', 'H']
]
const row = 2
const column = 0

console.log(revealMinesweeper(board, row, column))
