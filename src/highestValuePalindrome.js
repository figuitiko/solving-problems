/*
 * Complete the 'highestValuePalindrome' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER n
 *  3. INTEGER k
 */
function highestValuePalindrome (s, n, k) {
  const arr = s.split('')

  let changes = 0
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    let valI = arr[j]
    let valJ = arr[j]
    if (valI !== valJ) {
      valI = valJ = Math.max(valI, valJ)
      changes++
    }
  }

  if (changes > k) {
    return '-1' // Impossible to create a palindrome within the given constraints
  }

  let remainingChanges = k - changes
  let i = 0
  let j = n - 1
  while (i <= j) {
    if (i === j) {
      if (remainingChanges > 0) {
        arr[i] = '9'
      }
    } else if (arr[i] < '9') {
      if (remainingChanges >= 2 && arr[i] === s[i] && arr[j] === s[j]) {
        remainingChanges -= 2
        arr[i] = arr[j] = '9'
      } else if (remainingChanges >= 1 && (arr[i] !== s[i] || arr[j] !== s[j])) {
        remainingChanges--
        arr[i] = arr[j] = '9'
      }
    }

    i++
    j--
  }

  return arr.join('')
}

const s = '12321'
const n = 5
const k = 1
const result = highestValuePalindrome(s, n, k)
console.log(result)
