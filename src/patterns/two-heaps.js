// Problem: Find the median of a number stream.

class MedianFinder {
  constructor () {
    this.lowerHalf = [] // Max-heap (simulated with reverse sorting)
    this.upperHalf = [] // Min-heap (sorted array)
  }

  addNum (num) {
    // Insert into the appropriate heap
    if (this.lowerHalf.length === 0 || num <= this.lowerHalf[0]) {
      this.lowerHalf.push(num)
      this.lowerHalf.sort((a, b) => b - a) // Maintain max-heap property
    } else {
      this.upperHalf.push(num)
      this.upperHalf.sort((a, b) => a - b) // Maintain min-heap property
    }

    // Balance the heaps
    if (this.lowerHalf.length > this.upperHalf.length + 1) {
      this.upperHalf.push(this.lowerHalf.shift())
      this.upperHalf.sort((a, b) => a - b)
    } else if (this.upperHalf.length > this.lowerHalf.length) {
      this.lowerHalf.push(this.upperHalf.shift())
      this.lowerHalf.sort((a, b) => b - a)
    }
  }

  findMedian () {
    if (this.lowerHalf.length > this.upperHalf.length) {
      return this.lowerHalf[0]
    }
    return (this.lowerHalf[0] + this.upperHalf[0]) / 2
  }
}
