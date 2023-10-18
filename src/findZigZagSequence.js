function findZigZagSequence (a) {
  a.sort((a, b) => a - b)
  const n = a.length
  const mid = Math.floor((n + 1) / 2)

  // Swap elements at mid and n-1
  ;[a[mid], a[n - 1]] = [a[n - 1], a[mid]]

  let st = mid + 1
  let ed = n - 1

  while (st <= ed) {
    // Swap elements at st and ed
    [a[st], a[ed]] = [a[ed], a[st]]
    st++
    ed--
  }

  // Print the array elements
  console.log(a.join(' '))
}

// Example usage:
const arr = [4, 2, 7, 5, 8, 3]
console.log(findZigZagSequence(arr))
