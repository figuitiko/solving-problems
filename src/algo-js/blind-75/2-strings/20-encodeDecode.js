const encode = (strs) => {
  if (!strs.length) return null
  return strs.join('-encodeStr')
}
const decode = (s) => {
  if (s === null) return []
  return s.split('-encodeStr')
}
const input = ['neet', 'code', 'love', 'you']
console.log(decode(encode(input)))

const encode1 = (strs) => {
  let res = ''
  for (const s of strs) {
    res += s.length + '#' + s
  }
  return res
}

const decode1 = (str) => {
  const res = []
  let i = 0
  while (i < str.length) {
    let j = i
    while (str[j] !== '#') {
      j++
    }
    const length = parseInt(str.substring(i, j))
    i = j + 1
    j = i + length
    res.push(str.substring(i, j))
    i = j
  }
  return res
}

console.log(decode1(encode1(input)))
