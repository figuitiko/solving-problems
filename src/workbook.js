/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

const workbook = (n, k, arr) => {
  let specialProblems = 0
  let currentPage = 1
  let problemPerPage = 0
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    let j = 0
    while (val > 0) {
      j++
      if (problemPerPage < k) {
        problemPerPage++
        // pagesAndProblems[currentPage] = problemPerPage
      } else {
        currentPage++
        problemPerPage = 1
      }
      if (j === currentPage) {
        specialProblems++
      }
      val--
    }
    currentPage++
    problemPerPage = 0
  }
  return specialProblems
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]))
console.log(workbook(2, 10, [1, 29, 94, 15, 87, 100, 20, 55, 100, 45, 82, 80, 100, 100, 3, 53, 100, 2, 100, 100, 100, 100, 100, 100, 1]))
