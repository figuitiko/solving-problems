const towerBreakers = (n, m) => {
  let tower1 = m
  let tower2 = m
  let i = 0
  while (tower1 >= 0 || tower2 >= 0) {
    if (i % 2 === 0) {
      const optimalMove = findTheMove(tower1)
      tower1 = tower1 - optimalMove
    } else {
      const optimalMove = findTheMove(tower2)
      tower2 = tower2 - optimalMove
    }
    i++
  }
  return (i - 1) % 2 === 0 ? 1 : 2
}

const findTheMove = (n) => {
  let maxOptimal = 1
  for (let i = 1; i < n; i++) {
    if (n % i === 0 && i > maxOptimal) {
      maxOptimal = i
    }
  }
  return maxOptimal
}

console.log(towerBreakers(2, 6))
