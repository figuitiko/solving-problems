const trap = (height) => {
  if (!height || height.length === 0) {
    return 0
  }

  let l = 0
  let r = height.length - 1
  let leftMax = height[l]
  let rightMax = height[r]
  let res = 0
  while (l < r) {
    if (leftMax < rightMax) {
      l++
      const currLeftHeight = height[l]
      leftMax = Math.max(leftMax, currLeftHeight)
      res += leftMax - currLeftHeight
    } else {
      r--
      const currRightHeight = height[r]
      rightMax = Math.max(rightMax, currRightHeight)
      res += rightMax - currRightHeight
    }
  }
  return res
}

console.log(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]))
