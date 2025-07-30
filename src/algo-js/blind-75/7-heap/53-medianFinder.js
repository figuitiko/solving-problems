
const MedianFinder = function () {
  this.arr = []
}

MedianFinder.prototype.addNum = function (num) {
  let left = 0
  let right = this.arr.length - 1

  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    if (this.arr[mid] < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  this.arr.splice(left, 0, num)
}

MedianFinder.prototype.findMedian = function () {
  if (this.arr.length % 2 === 0) {
    // even
    const mid = this.arr.length / 2
    return (this.arr[mid] + this.arr[mid - 1]) / 2
  } else {
    // odd
    const mid = Math.floor(this.arr.length / 2)
    return this.arr[mid]
  }
}
