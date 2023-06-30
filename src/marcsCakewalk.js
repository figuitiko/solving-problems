/*
 * Complete the 'marcsCakewalk' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY calorie as parameter.
 */

const marcsCakewalk = (calorie) => {
  const sortedCal = calorie.sort((a, b) => b - a)
  let minVal = 0
  for (let i = 0; i < sortedCal.length; i++) {
    minVal += Math.pow(2, i) * sortedCal[i]
  }
  return minVal
}
// console.log(calccalorie([5, 10, 7]))
// console.log(marcsCakewalk([5, 10, 7]))
console.log(marcsCakewalk([7, 4, 9, 6]))
