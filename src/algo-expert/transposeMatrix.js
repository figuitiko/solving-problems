const transposeMatrix = (matrix) => {
  const result = []
  for (let i = 0; i < matrix[0].length; i++) {
    const tempArr = []
    for (let j = 0; j < matrix.length; j++) {
      tempArr.push(matrix[j][i])
    }
    result.push(tempArr)
  }
  return result
}
console.log(transposeMatrix([
  [1, 2]
]))
console.log(transposeMatrix([
  [1, 2],
  [3, 4],
  [5, 6]
]))
