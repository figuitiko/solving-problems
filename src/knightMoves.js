const knightMoves = (cell) => {
  const board = Array(8).fill().map(item => Array(8).fill(1))
  const boardLetters = {
    a: 7,
    b: 6,
    c: 5,
    d: 4,
    e: 3,
    f: 2,
    g: 1,
    h: 0
  }
  const cellArr = cell.split('')
  const moves = {
    upLargeRight: [2, 1],
    upLargeLeft: [2, -1],
    upShortRight: [1, 2],
    upShortLeft: [1, -2],
    downLargeRight: [-2, 1],
    downLargeLeft: [-2, -1],
    downShortRight: [-1, 2],
    downShortLeft: [-1, -2]
  }
  console.log(cellArr)
  const [letterVal, numberVal] = cellArr
  let count = 0
  Object.keys(moves).forEach(key => {
    const [first, second] = moves[key]
    if (board[boardLetters[letterVal.toLowerCase()] + first]?.[(Number(numberVal) - 1) - second]) {
      count++
    }
  })
  return count
}
console.log(knightMoves('A1'))
