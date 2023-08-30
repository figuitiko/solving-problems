const sumIntervals = (intervals) => {
  // Sort intervals based on their start value
  intervals.sort(function (a, b) {
    return a[0] - b[0]
  })
  const mergedInitial = [
    [...intervals[0]]
  ]
  for (let i = 1; i < intervals.length; i++) {
    const [min, max] = intervals[i]
    const [, maxMerged] = mergedInitial[mergedInitial.length - 1]
    if (min > maxMerged) {
      mergedInitial.push([min, max])
      continue
    }
    if (min < maxMerged && max > maxMerged) {
      mergedInitial.push([maxMerged, max])
    }
  }
  let sum = 0
  console.log(mergedInitial)
  for (let i = 0; i < mergedInitial.length; i++) {
    sum += Math.abs((mergedInitial[i][mergedInitial[i].length - 1]) - mergedInitial[i][0])
  }
  return sum
}

// console.log(sumIntervals([
//   [1, 4],
//   [7, 10],
//   [3, 5]
// ]))

// // console.log(sumIntervals([
// //   [1, 2],
// //   [6, 10],
// //   [11, 15]
// // ]))

console.log(sumIntervals([
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
]))

console.log(
  sumIntervals([
    [0, 20],
    [-1e8, 10],
    [30, 40]
  ]
  )
)

console.log(
  sumIntervals([
    [1, 5], [1, 5]
  ]
  )
)
