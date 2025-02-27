const longestPeak = (array) => {
  let currentPeak = []
  let isIncreasing = true
  const arrayOfLength = []

  let currentFirst = null
  for (let i = 0; i < array.length; i++) {
    currentFirst = array[i]
    currentPeak.push(currentFirst)
    for (let j = i + 1; j < array.length; j++) {
      if (currentFirst < array[j] && isIncreasing) {
        currentPeak.push(array[j])
        currentFirst = array[j]
      } else if (currentFirst > array[j] && currentPeak.length > 1) {
        currentPeak.push(array[j])
        isIncreasing = false
        if (j === array.length - 1) {
          arrayOfLength.push(currentPeak.length)
          currentPeak = []
          isIncreasing = true
          break
        } else {
          currentFirst = array[j]
        }
      } else if ((currentFirst < array[j] && !isIncreasing) || currentFirst === array[j]) {
        if (!isIncreasing) {
          arrayOfLength.push(currentPeak.length)
        }
        currentPeak = []
        isIncreasing = true
        break
      }
    }
  }
  return arrayOfLength.length > 0 ? Math.max(...arrayOfLength) : 0
}
console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
// console.log(longestPeak([1, 2, 3]))
// console.log(longestPeak([5, 4, 3, 2, 1, 2, 1]))

const longestPeak1 = (array) => {
  const peaksLength = []
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i] > array[i + 1]) {
      // peaks.push(array[i])
      const singlePeak = [array[i]]
      let j = i
      let k = i
      while (array[j - 1] < array[j]) {
        singlePeak.push(array[j - 1])
        j--
      }
      while (array[k + 1] < array[k]) {
        singlePeak.push(array[k + 1])
        k++
      }
      peaksLength.push(singlePeak.length)
    }
  }
  if (peaksLength.length === 0) {
    return 0
  }

  return Math.max(...peaksLength)
}
// console.log(longestPeak1([5, 4, 3, 2, 1, 2, 1]))
console.log(longestPeak1([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
