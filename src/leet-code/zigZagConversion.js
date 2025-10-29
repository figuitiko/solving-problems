const convert = (s, numRows) => {
  if (numRows === 1) return s
  const rows = Array.from({ length: Math.min(numRows, s.length) }, () => [])
  let i = 0
  let goingDown = false
  for (const char of s) {
    rows[i].push(char)
    if (i === 0 || i === numRows - 1) goingDown = !goingDown
    i += goingDown ? 1 : -1
  }
  return rows.flat().join('')
}
console.log(convert('PAYPALISHIRING', 3))
