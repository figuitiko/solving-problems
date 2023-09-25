const deleteDigit = (n) => {
  const nArr = n.toString().split('').map(Number)
  let max = Number(nArr.filter((_, idx) => idx !== 0).join(''))
  console.log(max)
  for (let i = 1; i < nArr.length; i++) {
    const newVal = Number(nArr.filter((_, idx) => idx !== i).join(''))
    if (newVal >= max) {
      max = newVal
    }
  }
  return max
}
console.log(deleteDigit(1001))
console.log(deleteDigit(584))
console.log(deleteDigit(222250))
