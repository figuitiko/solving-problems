const phoneCall = (min1, min2To10, min11, s) => {
  let i = 2
  if (min1 > s) return 0
  let result = 1
  s = s - min1
  while (s > 0) {
    if (i > 1 && i < 11) {
      if (s < min2To10) {
        break
      }
      s = s - min2To10
      result++
    } else {
      if (s < min11) {
        break
      }
      s = s - min11
      result++
    }
    i++
  }
  return result
}
// console.log(phoneCall(3, 1, 2, 20))
console.log(phoneCall(10, 1, 2, 22))
console.log(phoneCall(1, 2, 1, 6))
