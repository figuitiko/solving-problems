const strStr = (haystack, needle) => {
  let l = 0
  let r = 0
  let curr = ''
  while (r < haystack.length) {
    if (curr !== needle) {
      r++
      curr = haystack.slice(l, r)
    }
    if (!needle.includes(curr)) {
      l++
    }
    if (curr === needle) {
      return l
    }
  }
  return -1
}

console.log(strStr('mississippi', 'issip'))
console.log(strStr('hello', 'll'))
