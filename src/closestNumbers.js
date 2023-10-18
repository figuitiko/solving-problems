const closestNumbers = (arr) => {
  arr.sort((a, b) => a - b)
  let minArr = [[arr[0], arr[1]]]
  let minVal = Math.abs(arr[1] - arr[0])
  for (let i = 1; i < arr.length - 1; i++) {
    const valueSum = Math.abs(arr[i + 1] - arr[i])
    if (valueSum < minVal) {
      minVal = valueSum
      minArr = [[arr[i], arr[i + 1]]]
    } else if (valueSum === minVal) {
      minArr.push([arr[i], arr[i + 1]])
    }
  }
  return minArr.flat()
}
console.log(closestNumbers([20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]))
console.log(closestNumbers([5, 2, 3, 4, 1]))
