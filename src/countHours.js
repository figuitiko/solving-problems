const countHours = (year, holidays) => {
  let amountOfHours = 0
  holidays.forEach(item => {
    const date = new Date(item + '/' + year)
    console.log(date)
    const day = date.getDay()
    console.log({ day })
    if (day >= 1 && day < 6) {
      amountOfHours += 2
    }
  })
  return amountOfHours
}
console.log(countHours(2023, ['01/02', '04/01', '12/25']))
// console.log(countHours(2022, ['01/06', '04/01', '12/25']))
