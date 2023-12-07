const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
  redShirtSpeeds.sort((a, b) => b - a)
  blueShirtSpeeds.sort((a, b) => b - a)
  return redShirtSpeeds.reduce((acc, curr, currIdx) => {
    if (!fastest) {
      return acc + Math.max(curr, blueShirtSpeeds[currIdx])
    }
    return acc + Math.max(curr, blueShirtSpeeds[(blueShirtSpeeds.length - 1) - currIdx])
  }, 0)
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true))
// console.log(tandemBicycle([3, 4, 4, 1, 1, 8, 9], [9, 8, 2, 2, 3, 5, 6], false))
