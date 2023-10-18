const plusMinus = (arr) => {
  const dataArr = {
    postive: 0,
    negative: 0,
    zeros: 0
  }
  for (const val of arr) {
    if (val > 0) {
      dataArr.postive = dataArr.postive + 1
    } else if (val === 0) {
      dataArr.zeros = dataArr.zeros + 1
    } else {
      dataArr.negative = dataArr.negative + 1
    }
  }
  Object.values(dataArr).map(item => (item / arr.length).toFixed(5)).forEach(item => {
    console.log(item)
  })
}

console.log(console.log(plusMinus([1, 1, 0, -1, -1])))
console.log(console.log(plusMinus([-4, 3, -9, 0, 4, 1])))
