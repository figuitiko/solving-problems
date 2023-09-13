function almostIncreasingSequence (sequence) {
  let count = 0
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      count++
      if (i > 0 && sequence[i + 1] <= sequence[i - 1]) {
        sequence[i + 1] = sequence[i]
      } else {
        sequence[i] = sequence[i + 1]
      }
    }
  }
  return count <= 1
}
