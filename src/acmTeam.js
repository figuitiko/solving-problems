const acmTeam = (topic) => {
  const maxResultArr = []
  for (let i = 1; i < topic.length; i++) {
    for (let j = i + 1; j <= topic.length; j++) {
      const tempArr = [i, j]
      const topicA = topic[i - 1].split('').map(Number)
      const topicB = topic[j - 1].split('').map(Number)
      const tempArrMax = []
      topicA.forEach((itemA, idx) => {
        const result = itemA + topicB[idx]
        if (result >= 1) {
          tempArrMax.push(1)
        } else {
          tempArrMax.push(0)
        }
      })
      maxResultArr.push(tempArrMax.reduce((a, b) => a + b))
    }
  }

  const maxVal = Math.max(...maxResultArr)
  return [maxVal, getOccurrence(maxResultArr, maxVal)]
}
function getOccurrence (array, value) {
  let count = 0
  array.forEach((v) => (v === value && count++))
  return count
}

// console.log(acmTeam(['10101', '11100', '11010', '11010']));
// console.log(acmTeam(['10101', '11100', '11010', '00101']));
console.log(acmTeam(['11101', '10101', '11001', '10111', '10000', '01110']))

// 11101
// 10101
// 11001
// 10111
// 10000
// 01110

function acmTeam1 (topic) {
  const n = topic.length
  const m = topic[0].length
  let maxCount = 0
  let count = 0

  // Loop through all possible pairs of topics
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      count = 0

      // Count the number of topics the two people know
      for (let k = 0; k < m; k++) {
        if (topic[i][k] === '1' || topic[j][k] === '1') {
          count++
        }
      }

      // Update maxCount if necessary
      if (count > maxCount) {
        maxCount = count
      }
    }
  }

  // Count the number of pairs with maxCount topics
  let pairCount = 0
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      count = 0

      // Count the number of topics the two people know
      for (let k = 0; k < m; k++) {
        if (topic[i][k] === '1' || topic[j][k] === '1') {
          count++
        }
      }

      // Increment pairCount if the two people know maxCount topics
      if (count === maxCount) {
        pairCount++
      }
    }
  }

  return [maxCount, pairCount]
}
