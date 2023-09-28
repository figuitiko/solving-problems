const camSumTab = (targ, arr) => {
  const table = Array(targ + 1).fill(false)
  table[0] = true
  for (let i = 0; i < targ; i++) {
    if (table[i]) {
      for (const num of arr) {
        table[num + i] = true
      }
    }
  }
  console.log(table)
  return table[targ]
}
console.log(camSumTab(7, [5, 3, 4]))
