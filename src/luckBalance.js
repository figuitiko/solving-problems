/*
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

const luckBalance = (k, contests) => {
  const sortedContest = contests.sort((a, b) => b[0] - a[0])
  const importantContest = sortedContest.filter(item => item[1] === 1).map(item => item[0])
  const notImportantContest = sortedContest.filter(item => item[1] !== 1).map(item => item[0])
  const importantLost = importantContest.length > k ? importantContest.splice(k) : importantContest.splice(0, k)
  const sumImportant = importantLost.length > 0 ? importantContest.reduce((a, b) => a + b) : 0
  const sumNotImportant = notImportantContest.length > 0 ? notImportantContest.reduce((a, b) => a + b) : 0
  const sumImportantLost = importantLost.length > 0 ? importantLost.reduce((a, b) => a + b) : 0
  return sumImportant + sumNotImportant - sumImportantLost
}

const luckBalance1 = (k, contests) => {
  const sortedContest = contests.sort((a, b) => b[0] - a[0])
  let luck = 0
  for (const item of sortedContest) {
    if (item[1] === 0) {
      luck += item[0]
    } else if (k > 0) {
      luck += item[0]
      k--
    } else {
      luck -= item[0]
    }
  }
  return luck
}

console.log(luckBalance1(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]))
console.log(luckBalance1(5, [[13, 1], [10, 1], [9, 1], [8, 1], [13, 1], [12, 1], [18, 1], [13, 1]]))
// 8 5
// 13 1
// 10 1
// 9 1
// 8 1
// 13 1
// 12 1
// 18 1
// 13 1
