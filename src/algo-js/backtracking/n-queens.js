const nQueens = (n) => {
  const col = new Set()
  const posDiag = new Set()
  const negDiag = new Set()
  let count = 0

  const isValid = (r, c) => !(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c))
  const addQueen = (r, c) => {
    col.add(c)
    posDiag.add(r + c)
    negDiag.add(r - c)
  }
  const removeQueen = (r, c) => {
    col.delete(c)
    posDiag.delete(r + c)
    negDiag.delete(r - c)
  }
  const recurse = (row) => {
    if (row === n) {
      count++
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        addQueen(row, col)
        count = recurse(row + 1)
        removeQueen(row, col)
      }
    }
    return count
  }
  return recurse(0)
}

console.log(nQueens(4))
