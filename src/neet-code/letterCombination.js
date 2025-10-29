const letterCombination = (digits) => {
  if (digits.length === 0) return []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const res = []
  const recurse = (i, currStr) => {
    if (currStr.length === digits.length) {
      res.push(currStr)
      return
    }
    for (const c of map[digits[i]]) {
      recurse(i + 1, currStr + c)
    }
  }
  recurse(0, '')
  return res
}
console.log(letterCombination('23'))
