const activityNotifications = (expenditure, d) => {
  const mediamArr = expenditure.slice(0, d).sort((a, b) => a - b)
  let medianVal = 0
  let notifications = 0
  for (let i = d; i < expenditure.length; i++) {
    medianVal = d % 2 !== 0
      ? mediamArr[Math.floor(mediamArr.length / 2)]
      : (mediamArr[(mediamArr.length / 2) - 1] + mediamArr[(mediamArr.length / 2)]) / 2
    if (i < expenditure.length - 1) {
      mediamArr.shift()
    }

    if (expenditure[i] >= 2 * medianVal) {
      notifications++
    }
    // let insertedPos = 0
    // while (insertedPos < mediamArr.length && mediamArr[insertedPos] <= expenditure[i]) {
    //   insertedPos++
    // }
    const idxVal = mediamArr.findLastIndex(item => item <= expenditure[i])
    mediamArr.splice(idxVal, 0, expenditure[i])
    // mediamArr.push(expenditure[i])
    // mediamArr.sort()
  }
  return notifications
}
console.log(activityNotifications([10, 20, 30, 40, 50], 3))
console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))

const activityNotifications2 = (expenditure, d) => {
  let notifications = 0
  const counts = new Array(201).fill(0)
  for (let i = 0; i < d; i++) {
    counts[expenditure[i]]++
  }
  for (let i = d; i < expenditure.length; i++) {
    const median = getMedian(counts, d)
    if (expenditure[i] >= median * 2) {
      notifications++
    }
    counts[expenditure[i - d]]--
    counts[expenditure[i]]++
  }
  return notifications
}

const getMedian = (counts, d) => {
  let sum = 0
  for (let i = 0; i < counts.length; i++) {
    sum += counts[i]
    if (sum * 2 === d) {
      return i * 2
    } else if (sum * 2 > d) {
      return i
    }
  }
}
console.log(activityNotifications2([10, 20, 30, 40, 50], 3))
console.log(activityNotifications2([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
