/**
 * Escribe una función que invierta los caracteres dentro de los
 * paréntesis (posiblemente anidados) en la cadena de entrada.
 * Las cadenas de entrada siempre estarán bien formadas
 * con paréntesis () coincidentes
 */

const solution = (inputString) => {
  const regex = /\((\w*)\)/g
  let matches = []
  while (matches !== null) {
    matches = inputString.match(regex)
    if (matches) {
      matches.forEach(element => {
        const itemReverse = reverseClean(element)
        inputString = inputString.replace(element, itemReverse)
      })
    }
  }
  return inputString
}

const reverseClean = (s) => {
  return s.split('').filter(item => item !== '(' && item !== ')').reverse().join('')
}

// console.log(solution('foo(bar(baz()))blim'))
// console.log(solution('foo(bar)baz(blim)'))
// console.log(solution('foo(bar)baz'))
// console.log(solution('()'))

const solution1 = (srt) => {
  let strResult = ''
  const strWord = []
  for (let i = 0; i < srt.length; i++) {
    if (srt[i] === '(') {
      let tempIdx = i
      while (srt[tempIdx] !== ')') {
        tempIdx++
        if (srt[tempIdx] === '(') continue
        if (srt[tempIdx] === ')') continue
        strWord.unshift(srt[tempIdx])
      }
      strResult += strWord.join('')
      i = tempIdx
    } else {
      if (srt[i] === ')') continue
      strResult += srt[i]
    }
  }
  return strResult
}

console.log(solution1('foo(bar(baz()))blim'))
console.log(solution1('foo(bar)baz(blim)'))
console.log(solution1('foo(bar)baz'))
console.log(solution1('()'))
