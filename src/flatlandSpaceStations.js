// Complete the flatlandSpaceStations function below.
const flatlandSpaceStations = (n, c) => {
  const distances = []
  const arrValues = new Array(n).fill(null)
  for (const val of c) {
    arrValues[val] = 1
  }
  console.log({ arrValues })
  for (let i = 0; i < arrValues.length; i++) {
    if (arrValues[i]) {
      distances.push(0)
    } else {
      distances.push(findNearest(i, c))
    }
  }
  console.log({ distances })
  return Math.max(...distances)
}
const findNearest = (val, c) => {
  const newArr = [...c, val]
  newArr.sort((a, b) => a - b)
  // console.log({ newArr })
  const indexOfVal = newArr.indexOf(val)
  if (val === 0) {
    return Math.abs((newArr[indexOfVal + 1] || 0) - (newArr[indexOfVal] || 0))
  }
  const leftSide = Math.abs((newArr[indexOfVal] || 0) - (newArr[indexOfVal - 1] || 0))
  const rightSide = Math.abs((newArr[indexOfVal + 1] || 0) - (newArr[indexOfVal] || 0))
  const minSide = Math.min(leftSide, rightSide)
  return minSide
}

// console.log(flatlandSpaceStations(5, [0, 4]))
console.log(flatlandSpaceStations(95, [68, 81, 46, 54, 30, 11, 19, 23, 22, 12, 38, 91, 48, 75, 26, 86, 29, 83, 62]))
