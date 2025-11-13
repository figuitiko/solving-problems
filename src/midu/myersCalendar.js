function myersCalendar (year) {
  const dates = []

  const currentDate = new Date(year, 0, 1)
  while (currentDate.getFullYear() === year) {
    const currentDay = currentDate.getDay()
    const currentDayMonth = currentDate.getDate()
    const currentMonth = currentDate.getMonth()
    if ((currentDay === 5 && currentDayMonth === 13) || (currentDayMonth === 31 && currentMonth === 9)) {
      const year = currentDate.getFullYear()
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
      const day = currentDate.getDate().toString().padStart(2, '0')

      dates.push(`${year}-${month}-${day}`)
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}

console.log(myersCalendar(2025))
