/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

const minimumDistances = (a) => {
// Write your code here
  let minDistance = Infinity
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        const distance = j - i
        if (distance < minDistance) {
          minDistance = distance
        }
      }
    }
  }
  if (minDistance === Infinity) {
    return -1
  }

  return minDistance
}

const arraySample = [3, 2, 1, 2, 3]
const arraySample1 = [7, 1, 3, 4, 1, 7]
minimumDistances(arraySample)
minimumDistances(arraySample1)
