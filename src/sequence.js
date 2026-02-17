// get the the missing in the sequence  31 32 34 35 result 33  other  198 198 199 201 result 200

const getMissingInSequence = (str) => {
  let sequenceValue = 0
  const getSequence = (str, sequence) => {
    if (sequenceValue !== 0) return
    let k = 0
    let i = 0
    let prevDigit = str.slice(i, sequence)
    while (i < str.length - 1 && k < 2) {
      const curr = str.slice(i + sequence, i + prevDigit.length + sequence)
      if ((parseInt(curr) - parseInt(prevDigit)) === 1) {
        sequenceValue = sequence
        return
      }
      prevDigit = curr
      k++
      i++
    }
    getSequence(str, sequence + 1)
  }
  getSequence(str, 1)
}

console.log(getMissingInSequence('31323435'))
console.log(getMissingInSequence('197198199201'))
