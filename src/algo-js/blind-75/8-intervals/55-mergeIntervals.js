const merge = (intervals) => {
  const start = 0
  const end = 1

  intervals = intervals.sort((a, b) => a[start] - b[start])
  let previous = intervals[start]
  const res = [previous]
  for (const current of intervals) {
    if (current[start] <= previous[end]) {
      previous[end] = Math.max(previous[end], current[end])
    } else {
      res.push(current)
      previous = current
    }
  }
  return res
}

console.log(merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]))
