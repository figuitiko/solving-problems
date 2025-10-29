const countSubSequence = (str, strArr) => {
  const checkIsSubSequence = (str1, str2) => {
    const map = {}
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i]
      if (!map[char]) {
        map[char] = 1
      } else {
        map[char] += 1
      }
    }
    for (const char of str1) {
      if (map[char]) {
        map[char] -= 1
      }
    }
    return Object.values(map).every((item) => item === 0)
  }
  const filtered = strArr.filter(item => checkIsSubSequence(str, item))
  return filtered.length
}
console.log(countSubSequence('abcde', ['a', 'bb', 'acd', 'ace']))
