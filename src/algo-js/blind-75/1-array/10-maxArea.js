const maxArea = (height) => {
  let left = 0
  let right = height.length - 1
  let maxima = 0
  while (left < right) {
    const width = right - left
    const currArea = Math.min(height[left], height[right]) * width
    maxima = Math.max(maxima, currArea)
    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }
  return maxima
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
