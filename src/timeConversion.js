const timeConversion = (s) => {
  const meridian = s[s.length - 2] + s[s.length - 1]
  const arrValues = s.slice(0, s.length - 2).split(':')
  if (meridian === 'PM') {
    arrValues[0] = arrValues[0] === '12' ? arrValues[0] : (Number(arrValues[0]) + 12).toString()
  } else {
    arrValues[0] = arrValues[0] === '12' ? '00' : arrValues[0]
  }
  console.log(arrValues[0] + ':' + arrValues[1] + ':' + arrValues[2])
  return arrValues[0] + ':' + arrValues[1] + ':' + arrValues[2]
}
console.log(timeConversion('12:01:00PM'))
console.log(timeConversion('12:01:00PM'))
