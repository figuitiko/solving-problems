const isValidSudoku = (board) => {
  const validValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < board.length; i++) {
    const visited = new Set()
    for (let j = 0; j < board[0].length; j++) {
      const value = Number(board[i][j])
      if (visited.has(value)) {
        return false
      } else {
        if (typeof value === 'number' && validValues.includes(value)) {
          visited.add(value)
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    const visited = new Set()
    for (let j = 0; j < board[0].length; j++) {
      const value = Number(board[j][i])
      if (visited.has(value)) {
        return false
      } else {
        if (typeof value === 'number' && validValues.includes(value)) {
          visited.add(value)
        }
      }
    }
  }
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board[0].length; j += 3) {
      if (!checkGrid(i, j, board)) {
        return false
      }
    }
  }

  return true
}
const checkGrid = (initialI, initialJ, board) => {
  const validValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const visited = new Set()
  for (let i = initialI; i < initialI + 3; i++) {
    for (let j = initialJ; j < initialJ + 3; j++) {
      const value = Number(board[i][j])
      if (visited.has(value)) {
        return false
      } else {
        if (typeof value === 'number' && validValues.includes(value)) {
          visited.add(value)
        }
      }
    }
  }
  return true
}
const isValidSudoku1 = (board) => {
  const cols = new Map()
  const rows = new Map()
  const squares = new Map()

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') continue

      const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

      if ((rows.get(r) && rows.get(r).has(board[r][c])) ||
                    (cols.get(c) && cols.get(c).has(board[r][c])) ||
                    (squares.get(squareKey) && squares.get(squareKey).has(board[r][c]))) {
        return false
      }

      if (!rows.has(r)) rows.set(r, new Set())
      if (!cols.has(c)) cols.set(c, new Set())
      if (!squares.has(squareKey)) squares.set(squareKey, new Set())

      rows.get(r).add(board[r][c])
      cols.get(c).add(board[r][c])
      squares.get(squareKey).add(board[r][c])
    }
  }
  return true
}

const data = [['1', '2', '.', '.', '3', '.', '.', '.', '.'],
  ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']]

const data2 = [
  ['1', '2', '.', '.', '3', '.', '.', '.', '.'],
  ['4', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '9', '1', '.', '.', '.', '.', '.', '3'],
  ['5', '.', '.', '.', '6', '.', '.', '.', '4'],
  ['.', '.', '.', '8', '.', '3', '.', '.', '5'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '.', '2', '.', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '8'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']]

// console.log(isValidSudoku(data))
// console.log(isValidSudoku(data2))
console.log(isValidSudoku1(data2))
