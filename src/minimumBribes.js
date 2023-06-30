/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

const minimumBribes = (q) => {
  let swaps = 0
  for (let i = 1; i < q.length; i++) {
    for (let j = i; j > 0; j--) {
      if (q[j] < q[j - 1]) {
        swaps++
      }
    }
  }
  if (swaps >= 3) {
    console.log('Too chaotic ')
  }
  console.log(swaps)
}

console.log(minimumBribes([4, 1, 2, 3]))
console.log(minimumBribes([2, 5, 1, 3, 4]))
