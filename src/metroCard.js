const metroCard = (lastNumberOfDays) => {
  const arrDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const result = new Set()
  arrDays.forEach((item, idx) => {
    if (arrDays[idx] === lastNumberOfDays && idx !== 0) {
      result.add(arrDays[idx - 1])
    }
  })
  return [...result]
}
console.log(metroCard(30))
console.log(metroCard(31))
