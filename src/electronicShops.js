const electronicShops = (keyboards, drives, b) => {
  const choices = []
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const possibleChoice = keyboards[i] + drives[j]
      if (possibleChoice <= b) {
        choices.push(possibleChoice)
      }
    }
  }
  const result = choices.length > 0 ? Math.max(...choices) : -1
  return result
}

electronicShops([40, 50, 60], [5, 8, 12], 60)
