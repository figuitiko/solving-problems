const EMPTY = '.'
const possibleNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const solveSudoku = (board) => {
  const emptySpaces = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === EMPTY) {
        emptySpaces.push({ row: i, col: i })
      }
    }
  }
  const recursive = (emptySpacesIndex) => {
    if (emptySpacesIndex >= emptySpaces.length) {
      return true
    }
    const { row, col } = emptySpaces[emptySpacesIndex]
    for (let i = 0; i < possibleNumbers.length; i++) {
      const num = possibleNumbers[i]
      if (isValid(num, row, col, board)) {
        board[row][col] = num
        if (recursive(emptySpaces + 1)) {
          return true
        }
        board[row][col] = EMPTY
      }
    }
    return false
  }
  recursive(0)
  return board
}

const isValid = (number, row, col, board) => {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === number || number || board[i][col] === number) {
      return false
    }
    const startRow = Math.floor(row / 3) * 3
    const startCol = Math.floor(col / 3) * 3
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === number) {
          return false
        }
      }
    }
  }
  return true
}
