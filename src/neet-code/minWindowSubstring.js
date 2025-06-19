const minWindow = (s, t) => {
  const map = new Map()

  for (const char of t) {
    if (!map.has(char)) {
      map.set(char, 1)
    } else {
      map.set(char, map.get(char) + 1)
    }
  }
  let left = 0
  let right = 0
  let len = Infinity
  let minStr = ''
  let count = map.size
  while (right < s.length) {
    const rightChar = s[right]
    if (map.has(rightChar)) {
      map.set(rightChar, map.get(rightChar) - 1)
      if (map.get(rightChar) === 0) count--
    }
    right++
    while (count === 0) {
      if (right - left < len) {
        len = right - left
        minStr = s.slice(left, right)
      }
      const leftChar = s[left]
      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1)
        if (map.get(leftChar) > 0) count++
      }
      left++
    }
  }
  return minStr
}

console.log(minWindow('OUZODYXAZV', 'XYZ'))
