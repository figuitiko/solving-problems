
const { PriorityQueue } = require('@datastructures-js/priority-queue')

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

class MedianFinder1 {
  constructor () {
    this.data = []
  }

  /**
     *
     * @param {number} num
     * @return {void}
     */
  addNum (num) {
    this.data.push(num)
  }

  /**
     * @return {number}
     */
  findMedian () {
    this.data.sort((a, b) => a - b)
    const n = this.data.length
    if (n & 1) {
      return this.data[Math.floor(n / 2)]
    } else {
      return (this.data[n / 2] + this.data[n / 2 - 1]) / 2
    }
  }
}

class MedianFinder2 {
  constructor () {
    this.small = new PriorityQueue((a, b) => b - a) // Max heap for smaller half
    this.large = new PriorityQueue((a, b) => a - b) // Min heap for larger half
  }

  /**
     * @param {number} num
     */
  addNum (num) {
    if (this.large.isEmpty() || num > this.large.front()) {
      this.large.enqueue(num)
    } else {
      this.small.enqueue(num)
    }

    if (this.small.size() > this.large.size() + 1) {
      this.large.enqueue(this.small.dequeue())
    } else if (this.large.size() > this.small.size() + 1) {
      this.small.enqueue(this.large.dequeue())
    }
  }

  /**
     * @return {number}
     */
  findMedian () {
    if (this.small.size() > this.large.size()) {
      return this.small.front()
    } else if (this.large.size() > this.small.size()) {
      return this.large.front()
    } else {
      return (this.small.front() + this.large.front()) / 2.0
    }
  }
}
