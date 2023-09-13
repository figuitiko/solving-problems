const hurdleRace = (k, height) => {
  const max = Math.max(...height)
  if (k > max) return 0
  return max - k
}
