/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const cutTheSticks = (arr) => {
  const arrResult = []
  while (arr.length > 0) {
    arrResult.push(arr.length)
    arr = arr.map((item) => item - 1).filter((itemToFilter) => itemToFilter != 0)
  }

  return [...new Set(arrResult)]
}

// console.log(cutTheSticks([5, 4, 4, 2, 2,8]))
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]))
