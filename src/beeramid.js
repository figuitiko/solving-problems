const beeramid = (bonus, price) => {
  let cans = 0
  let level = 1
  while (bonus >= cans + level ** 2 * price) {
    cans += level ** 2 * price
    level++
  }
  return level - 1
}

// console.log(beeramid(1500, 2))
// console.log(beeramid(455, 5))
console.log(beeramid(9, 2))
