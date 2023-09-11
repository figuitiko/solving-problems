const buildPalindrome = (st) => {
  let i = 0
  if (st === st.split('').reverse().join('')) return st
  let newSt = st
  const arrToAdd = []
  while (newSt !== newSt.split('').reverse().join('')) {
    arrToAdd.unshift(st[i])
    newSt = st + arrToAdd.join('')
    i++
  }
  return newSt
}

console.log(buildPalindrome('abcdc'))
