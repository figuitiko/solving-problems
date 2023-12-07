const classPhotos = (redShirtHeights, blueShirtHeights) => {
  redShirtHeights.sort((a, b) => b - a)
  blueShirtHeights.sort((a, b) => b - a)
  const maxRed = redShirtHeights[0]
  const maxBlue = blueShirtHeights[0]
  const back = maxRed > maxBlue ? [...redShirtHeights] : [...blueShirtHeights]
  const front = maxRed > maxBlue ? [...blueShirtHeights] : [...redShirtHeights]
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (back[i] <= front[i]) return false
  }
  return true
}
// console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))
// console.log(classPhotos([5, 6, 7, 2, 3, 1, 2, 3], [1, 1, 1, 1, 1, 1, 1, 1]))
console.log(classPhotos([2, 4, 7, 5, 1], [3, 5, 6, 8, 2]))
