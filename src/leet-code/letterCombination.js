const letterCombinations = (digits) => {
  if (digits === '') return []

  const ret = []
  const sol = []
  const n = digits.length

  const letterMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const backTrack = (i = 0) => {
    if (sol.length === n) {
      ret.push(sol.join(''))
      return
    }
    for (const num of letterMap[digits[i]]) {
      sol.push(num)
      backTrack(i + 1)
      sol.pop()
    }
  }
  backTrack(0)
  return ret
}

console.log(letterCombinations('23'))
