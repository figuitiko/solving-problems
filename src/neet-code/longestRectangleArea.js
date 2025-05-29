const longestRectangleArea = (heights) => {
  let maxArea = -Infinity
  for (let i = 0; i < heights.length; i++) {
    const currHeight = heights[i]
    let currWith = 1
    let j = i - 1
    while (heights[j] && heights[i] <= heights[j]) {
      currWith++
      j--
    }
    let k = i + 1
    while (heights[k] && heights[i] <= heights[k]) {
      currWith++
      k++
    }
    const currArea = currWith * currHeight
    maxArea = Math.max(currArea, maxArea)
  }
  return maxArea
}
console.log(longestRectangleArea([7, 1, 7, 2, 2, 4]))
