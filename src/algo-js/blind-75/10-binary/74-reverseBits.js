const reverseBits = (n) => {
  let result = 0
  for (let i = 0; i < 32; i++) {
    const lastBit = n & 1
    const revBit = lastBit << (31 - i)
    result = result | revBit
    n = n >>> 1
  }
  return result >>> 0
}
// Use binary literal (0b...) or hexadecimal (0x...) for the input
console.log(reverseBits(0b00000010100101000001111010011100))
