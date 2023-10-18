const arrayPacking = (a) => {
  const arrBinaries = a.map(item => {
    let binaryVal = item.toString(2)
    while (binaryVal.length < 8) {
      binaryVal = '0' + binaryVal
    }
    return binaryVal
  }).reverse().join('')
  return parseInt(arrBinaries, 2)
}
console.log(arrayPacking([24, 85, 0]))

// console.log(parseInt('000000000101010100011000', 2))
