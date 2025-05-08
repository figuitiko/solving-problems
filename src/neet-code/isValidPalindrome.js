const isPalindrome = (s) => {
  const abc = 'abcdefghijklmnopqrstuvwxyz1234567890'
  let l = 0
  let r = s.length - 1
  while (l < r) {
    if (!abc.includes(s[l]?.toLocaleLowerCase())) {
      l++
      continue
    }
    if (!abc.includes(s[r]?.toLocaleLowerCase())) {
      r--
      continue
    }
    if (s[l]?.toLocaleLowerCase() !== s[r]?.toLocaleLowerCase()) {
      return false
    }
    l++
    r--
  }
  return true
}

// console.log(isPalindrome('No lemon, no melon'))
console.log(isPalindrome('0P'))
