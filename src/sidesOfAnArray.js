const sidesOfAnArray = (arr) => {
  let lefSide, rightSide
  for (let i = 0; i < arr.length; i++) {
    const lefSideArr = arr.slice(0, i)
    const rightSideArr = arr.slice(i + 1)
    lefSide = lefSideArr.length > 0 ? arr.slice(0, i).reduce((a, b) => a + b) : 0
    rightSide = rightSideArr.length > 0 ? arr.slice(i + 1).reduce((a, b) => a + b) : 0
    if (lefSide === rightSide) {
      return i
    }
  }
  return -1
}

// console.log(sidesOfAnArray([1, 2, 3, 4, 3, 2, 1]))
// console.log(sidesOfAnArray([1, 100, 50, -51, 1, 1]))
console.log(sidesOfAnArray([20, 10, -80, 10, 10, 15, 35]))
