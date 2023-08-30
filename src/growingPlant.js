const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
  let height = 0
  let result = 0
  while (height < desiredHeight) {
    height = height + upSpeed
    if (height >= desiredHeight) {
      result++
      break
    }
    height = height - downSpeed
    if (height >= desiredHeight) {
      result++
      break
    }
    result++
  }
  return result
}
// console.log(growingPlant(100, 10, 910))
console.log(growingPlant(10, 9, 4))
console.log(growingPlant(5, 2, 7)) // 2
