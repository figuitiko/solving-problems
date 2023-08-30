const separateNumbers = (s) => {
  if (s.length <= 1) {
    console.log('NO')
    return
  }
  const remainder = s.length % 2
  let initialChunk = Math.floor(s.length / 2) + remainder
  const arrResults = []
  while (initialChunk > 0) {
    const str = s
    const strArr = []
    for (let i = s.length; i > 0; i -= initialChunk) {
      const startIndex = Math.max(0, i - initialChunk)
      const endIndex = i
      const substring = str.slice(startIndex, endIndex)
      strArr.push(substring)
    }
    if (strArr.length > 0) {
      const currArr = []
      for (let i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] > 1 && str[i][0] === '0') {
          currArr.push(false)
          break
        }
        if (Number(strArr[i]) - Number(strArr[i + 1]) !== 1) {
          currArr.push(false)
          break
        }
      }
      if (currArr.length === 0) {
        arrResults.push(Math.min(...strArr))
      }
    }
    initialChunk--
  }
  if (arrResults.length > 0) {
    const min = Math.min(...arrResults)
    console.log('YES' + ' ' + min)
    return
  }
  console.log('NO')
}

// separateNumbers('1234')
// separateNumbers('91011')
// separateNumbers('99100')
// separateNumbers('010203')

function separateNumbers1 (s) {
  let baseLength = 1
  let found = false
  while (baseLength * 2 <= s.length) {
    const base = s.substr(0, baseLength)
    let reconstructedString = ''
    let baseNumber = parseInt(base)
    do {
      reconstructedString += baseNumber.toString()
      baseNumber++
    } while (reconstructedString.length < s.length)
    if (reconstructedString === s) {
      console.log('YES ' + base)
      found = true
      break
    }
    baseLength++
  }
  if (!found) {
    console.log('NO')
  }
}

separateNumbers1('7891011')
// separateNumbers1('1234')
// separateNumbers1('91011')
// separateNumbers1('99100')
// separateNumbers1('010203')
