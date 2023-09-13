const jumpingOnClouds = (c, k) => {
  let totalEnergy = 100
  let i = 0
  do {
    i = (i + k) % c.length
    totalEnergy = c[i] === 1 ? totalEnergy - 3 : totalEnergy - 1
  } while (i != 0)
  return totalEnergy
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))
