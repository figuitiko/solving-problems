const alternate = (s) => {
  const arrS = s.split('')
  const setSArr = [...new Set(arrS)]
  const pairContainers = new Map()
  let maxStr = 0
  for (let i = 0; i < setSArr.length; i++) {
    for (let j = 0; j < setSArr.length; j++) {
      if (s[i] === s[j]) {
        continue
      }
      if (!pairContainers.has(`${setSArr[i]}${setSArr[j]}`)) {
        const regex1 = new RegExp(setSArr[i], 'g')
        const regex2 = new RegExp(setSArr[j], 'g')
        let tempS = s.replace(regex1, '')
        tempS = tempS.replace(regex2, '')
        if (tempS.length === 8) {
          console.log('this is the one', tempS.length)
        }
        pairContainers.set(`${setSArr[i]}${setSArr[j]}`, tempS)
        if (checkIsValid(tempS) && tempS.length > maxStr) {
          maxStr = tempS.length
        }
      }
    }
  }
  // console.log(pairContainers)
  return maxStr
}
const checkIsValid = (s) => {
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] !== s[i + 2]) {
      return false
    }
  }
  if (s[0] === s[1]) {
    return false
  }

  return true
}

// console.log(alternate('beabeefeab')) // 5
// console.log(alternate('asvkugfiugsalddlasguifgukvsa')) // 0
console.log(alternate('asdcbsdcagfsdbgdfanfghbsfdab')) // 0

function alternate1 (s) {
  const uniqueChars = [...new Set(s)]
  let maxLength = 0

  for (let i = 0; i < uniqueChars.length - 1; i++) {
    for (let j = i + 1; j < uniqueChars.length; j++) {
      const filteredString = [...s].filter(char => char === uniqueChars[i] || char === uniqueChars[j]).join('')

      if (isAlternating(filteredString)) {
        maxLength = Math.max(maxLength, filteredString.length)
      }
    }
  }

  return maxLength
}

function isAlternating (s) {
  for (let i = 2; i < s.length; i++) {
    if (s[i] === s[i - 2]) {
      return false
    }
  }

  return true
}

console.log(alternate1('asdcbsdcagfsdbgdfanfghbsfdab'))

function alternate2 (s) {
  const a = Array.from(new Set(s))
  let lenW = 0

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      const x = a[i]
      const y = a[j]
      const regex = new RegExp(`[^${x}${y}]`, 'g')
      const result = s.replace(regex, '')
      console.log('result', result)
      if (!result.includes(x + x) && !result.includes(y + y) && result.length > lenW) {
        lenW = result.length
      }
    }
  }

  return lenW
}

// Example usage:
const testString = 'asdcbsdcagfsdbgdfanfghbsfdab'
const maxLength = alternate2(testString)
console.log(maxLength)
