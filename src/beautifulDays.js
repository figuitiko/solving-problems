const beautifulDays = (i, j, k) => {
  let countBeautiful = 0
  while (i <= j) {
    const reverse = Number(String(i).split('').reverse().join(''))
    const beautifulCal = (i - reverse) / k
    if (Number.isInteger(beautifulCal)) {
      countBeautiful++
    }
    i++
  }
  return countBeautiful
}
console.log(beautifulDays(20, 23, 6))
