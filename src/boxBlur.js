const boxBlur = (image) => {
  const arrResult = []
  for (let i = 1; i < image.length - 1; i++) {
    const tempArr = []
    for (let j = 1; j < image[0].length - 1; j++) {
      const calc = Math.floor((image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1] + image[i][j - 1] + image[i][j] + image[i][j + 1] +
        image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1]) / 9)
      tempArr.push(calc)
    }
    arrResult.push(tempArr)
  }
  return arrResult
}
const image = [[7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0]]

console.log(boxBlur(image))
