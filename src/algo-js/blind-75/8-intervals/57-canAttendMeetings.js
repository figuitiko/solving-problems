const canAttendMeetings = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])
  const start = 0
  const end = 1
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][end] > intervals[i + 1][start]) {
      return false
    }
  }
  return true
}
console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]]))
