/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

const minimumBribes = (q) => {
  const mapSwaps = {}
  let swaps = 0
  for (let i = 1; i < q.length; i++) {
    for (let j = i; j > 0; j--) {
      if (q[j] < q[j - 1]) {
        if (!mapSwaps[q[j - 1]]) {
          mapSwaps[q[j - 1]] = 1
        } else {
          mapSwaps[q[j - 1]] = mapSwaps[q[j - 1]] + 1
        }
        if (mapSwaps[[q[j - 1]]] >= 3) {
          console.log('Too chaotic')
          return
        }
        [q[j], q[j - 1]] = [q[j - 1], q[j]]
        swaps++
      }
    }
  }
  console.log(swaps)
  // // if (swaps > 3) {
  // //   console.log('Too chaotic ')
  // //   return
  // // }
  // console.log(mapSwaps)
}
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))

const minimumBribes1 = (q) => {
  let bribes = 0

  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > 2) {
      console.log('Too chaotic')
      return
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) {
        bribes++
      }
    }
  }
  console.log(bribes)
}
console.log(minimumBribes1([1, 2, 5, 3, 7, 8, 6, 4]))

// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
