const letterCombinations = (digits, start = 0) => {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'c'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', '0'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  if (digits === '') return []
  if (start >= digits.length) return ['']
  const digit = digits[start]
  const letters = map[digit]
  const combinations = []

  const suffixCombinations = letterCombinations(digits, start + 1)

  for (const letter of letters) {
    for (const suffix of suffixCombinations) {
      combinations.push(letter + suffix)
    }
  }
  return combinations
}

console.log(letterCombinations('23'))

const letterCombinations1 = (digits) => {
  const res = []
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'c'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', '0'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const backtrack = (i, curStr) => {
    if (curStr.length === digits.length) {
      res.push(curStr)
      return
    }
    for (const c of map[digits[i]]) {
      backtrack(i + 1, curStr + c)
    }
  }
  if (digits) {
    backtrack(0, '')
  }
  return res
}

console.log(letterCombinations1('23'))
