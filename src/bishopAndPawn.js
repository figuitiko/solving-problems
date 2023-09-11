const bishopAndPawn = (bishop, pawn) => {
  const board = new Array(8).fill(0).map(item => new Array(8).fill(0))
  // console.log('board', board)
  const letterAsNumberPos = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7
  }
  // put the bishop on the array
  const [letterBishop, numberBishop] = bishop.split('')
  const currentLetterBishopPos = letterAsNumberPos[letterBishop]
  const currentNumberBishopPos = numberBishop - 1
  board[currentLetterBishopPos][currentNumberBishopPos] = 1
  const [letterPawn, numberPawn] = pawn.split('')
  board[letterAsNumberPos[letterPawn]][numberPawn - 1] = 1
  if (bishop === pawn) return true
  if (letterBishop === letterPawn) return false
  // move up
  let startUpLetter = currentLetterBishopPos
  let startUpNumber = currentNumberBishopPos
  while (startUpLetter <= 7 && startUpNumber <= 7) {
    startUpLetter++
    startUpNumber++
    if (board[startUpLetter]?.[startUpNumber] === 1) {
      return true
    }
  }
  // move down
  startUpLetter = currentLetterBishopPos
  startUpNumber = currentNumberBishopPos
  while (startUpLetter >= 0 && startUpNumber >= 0) {
    startUpLetter--
    startUpNumber--
    if (board[startUpLetter]?.[startUpNumber] === 1) {
      return true
    }
  }
  // move left
  startUpLetter = currentLetterBishopPos
  startUpNumber = currentNumberBishopPos
  while (startUpLetter >= 0 && startUpNumber <= 7) {
    startUpLetter--
    startUpNumber++
    if (board[startUpLetter]?.[startUpNumber] === 1) {
      return true
    }
  }
  // move right
  startUpLetter = currentLetterBishopPos
  startUpNumber = currentNumberBishopPos
  while (startUpLetter <= 7 && startUpNumber >= 0) {
    startUpLetter++
    startUpNumber--
    if (board[startUpLetter]?.[startUpNumber] === 1) {
      return true
    }
  }
  return false
}

// console.log(bishopAndPawn('a1', 'c3'))
// console.log(bishopAndPawn('e7', 'd6'))
console.log(bishopAndPawn('g1', 'f3'))
