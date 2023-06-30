const chessBoardCellColor = (cell1, cell2) => {
  const mapBoard = new Map()
  const arrLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
  let colorStarter = 0
  for (const number of arrNumbers) {
    let color = colorStarter
    for (const letter of arrLetters) {
      mapBoard.set(`${letter}${number}`, color)
      color = color === 0 ? 1 : 0
    }
    colorStarter = colorStarter === 0 ? 1 : 0
  }
  return mapBoard.get(cell1) === mapBoard.get(cell2)
}
console.log(chessBoardCellColor('A1', 'C3'))
console.log(chessBoardCellColor('A1', 'H3'))
