const pickingNumbers = (a) => {
  let max = 0
  let count = 0
  const arr = a.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] - arr[i] <= 1) {
        count++
      }
    }
    if (count > max) {
      max = count
    }
    count = 0
  }
  return max
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]))
// console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]));

// string splice
