const canAttendMeetings = (intervals) => {
  const start = 0
  const end = 1
  intervals.sort((a, b) => a[start] - b[end])
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]
    if (curr[start] < prev[end]) {
      return false
    }
    prev = curr
  }
  return true
}

const intervals = [[0, 30], [5, 10], [15, 20]]
console.log(canAttendMeetings(intervals))

const intervals1 = [[9, 15], [5, 8]]

console.log(canAttendMeetings(intervals1))
