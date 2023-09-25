const validTime = (time) => {
  const timeArr = time.split(':')
  const [h, min] = timeArr
  if (Number(h) < 0 || Number(h) > 23) {
    return false
  }
  if (Number(min) < 0 || Number(min) > 59) {
    return false
  }
  return true
}
console.log(validTime('24:00'))
