const nQueens1 = (n) => {
  if (n.length === 1) return [['Q']]

  const col = new Set()
  const posDiag = new Set()
  const negDiag = new Set()
  const res = []
  const board = Array.from(Array(n), () => new Array(n).fill('.'))

  const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c))

  const addQueen = (r, c) => {
    col.add(c)
    posDiag.add(r + c)
    negDiag.add(r - c)
    board[r][c] = 'Q'
  }
  const removeTheQueen = (r, c) => {
    col.delete(c)
    posDiag.delete(r + c)
    negDiag.delete(r - c)
    board[r][c] = '.'
  }
  const recurse = (row) => {
    if (row === n) {
      res.push([...board].map((row) => row.join('')))
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        addQueen(row, col)
        recurse(row + 1)
        removeTheQueen(row, col)
      }
    }
  }
  recurse(0)
  return res
}

console.log(nQueens1(4))
