const cavityMap = (grid) => {
  const matrixGrid = grid.map(item => item.split(''))
  for (let i = 1; i < matrixGrid.length - 1; i++) {
    for (let j = 1; j < matrixGrid[i].length - 1; j++) {
      if (Number(matrixGrid[i][j]) > Number(matrixGrid[i][j - 1]) &&
        Number(matrixGrid[i][j]) > Number(matrixGrid[i][j + 1]) &&
        Number(matrixGrid[i][j]) > Number(matrixGrid[i + 1][j]) &&
        Number(matrixGrid[i][j]) > Number(matrixGrid[i - 1][j])) {
        matrixGrid[i][j] = 'X'
      }
    }
  }
  return matrixGrid.map(item => item.join(''))
}

// const cavityMap1 = (grid) => {
//   return grid.map((item, idx, arr) =>{
//     if(idx !== 0 && idx !== arr.length) {
//        for(let i = 1; i < item.length -1; i++) {
//         if(item[i] > it)
//        }
//     }
//   })
// }

console.log(cavityMap(['1112', '1912', '1892', '1234']))
