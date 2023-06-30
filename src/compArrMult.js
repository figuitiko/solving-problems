const compArMult = (array1, array2) => {
  if (!array1) return false
  if (!array2) return false
  if (array1.length !== array2.length) return false
  for (const val of array2) {
    const sqrtVal = Math.sqrt(val)
    const idxOfVal = array1.indexOf(sqrtVal)
    if (idxOfVal === -1) return false
    array1 = array1.filter((item, idx) => idx !== idxOfVal)
  }
  return true
}

// console.log(compArMult([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(compArMult([2, 2, 3], [4, 9, 9]))
