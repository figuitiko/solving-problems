const roundBitCount = (a, b) => {
  const arrToConvert = []
  for (let i = a; i <= b; i++) {
    arrToConvert.push(i)
  }
  return arrToConvert.map(item => {
    const numTobin = item.toString(2)
    console.log(numTobin)
    return numTobin.split('').filter(itemTofiter => itemTofiter === '1').length
  }).reduce((acc, curr) => acc + curr, 0)
}
console.log(roundBitCount(2, 7))
