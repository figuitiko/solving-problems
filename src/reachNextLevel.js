const reachNextLevel = (experience, threshold, reward) => {
  return experience + reward >= threshold
}
console.log(reachNextLevel(10, 15, 5))
