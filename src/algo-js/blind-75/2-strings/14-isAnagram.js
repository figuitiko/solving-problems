const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (!map[letter]) {
      map[letter] = 1
    } else {
      map[letter]++
    }
  }
  for (let i = 0; i < t.length; i++) {
    const letter = t[i]
    if (map[letter] === undefined) return false
    if (map[letter] < 1) return false
    map[letter]--
  }
  return true
}

// console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('aacc', 'ccac')) // false
