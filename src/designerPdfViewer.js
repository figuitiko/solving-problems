designerPdfViewer = (h, word) => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))
  const arrWord = word.split('')
  const idxArr = []
  arrWord.forEach(item => {
    const idx = alphabet.findIndex(itemAlpha => item.toLowerCase() === itemAlpha.toLocaleLowerCase())
    idxArr.push(idx)
  })
  const arrValues = idxArr.map(item => h[item])
  return Math.max(...arrValues) * word.length
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'))
