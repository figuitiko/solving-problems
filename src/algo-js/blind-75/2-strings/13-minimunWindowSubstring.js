const minimumWindowSubstring = (s, t) => {
  const map = new Map()
  for (const letter of t) {
    if (!map.has(letter)) {
      map.set(letter, 1)
    } else {
      map.set(letter, map.get(letter) + 1)
    }
  }
  let left = 0
  let right = 0
  let len = Infinity
  let count = map.size
  let minWindow = ''
  while (right < s.length) {
    const rightLetter = s[right]
    if (map.has(rightLetter)) {
      map.set(rightLetter, map.get(rightLetter) - 1)
      if (map.get(rightLetter) === 0) count--
    }
    right++
    while (count === 0) {
      if (right - left < len) {
        len = right - left
        minWindow = s.slice(left, right)
      }
      const leftLetter = s[left]
      if (map.has(leftLetter)) {
        map.set(leftLetter, map.get(leftLetter) + 1)
        if (map.get(leftLetter) > 0) count++
      }
      left++
    }
  }
  return minWindow
}

console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC'))
