const printerError = (s) => {
  const errAmount = s.split('').filter(item => item > 'm').length
  return `${errAmount}/${s.length}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))
