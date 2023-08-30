function powerSum (X, N) {
  function calculatePowerSum (target, currentNum) {
    const remainder = target - Math.pow(currentNum, N)
    if (remainder === 0) {
      return 1 // Found a valid combination
    }
    if (remainder < 0) {
      return 0 // Overshot the target
    }
    return calculatePowerSum(remainder, currentNum + 1) + calculatePowerSum(target, currentNum + 1)
  }

  return calculatePowerSum(X, 1)
}
