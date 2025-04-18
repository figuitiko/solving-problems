// Problem: Merge K sorted arrays.
class MinHeap {
  constructor () {
    this.heap = []
  }

  push (val) {
    this.heap.push(val)
    this.bubbleUp()
  }

  pop () {
    const top = this.heap[0]
    const end = this.heap.pop()
    if (this.heap.length) {
      this.heap[0] = end
      this.bubbleDown()
    }
    return top
  }

  bubbleUp () {
    let idx = this.heap.length - 1
    const element = this.heap[idx]
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      if (this.heap[parentIdx].value <= element.value) break;
      [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]]
      idx = parentIdx
    }
  }

  bubbleDown () {
    let idx = 0
    const length = this.heap.length
    const element = this.heap[0]
    while (true) {
      const leftIdx = 2 * idx + 1
      const rightIdx = 2 * idx + 2
      let swap = null
      if (leftIdx < length && this.heap[leftIdx].value < element.value) {
        swap = leftIdx
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx].value < (swap === null ? element.value : this.heap[leftIdx].value)
      ) {
        swap = rightIdx
      }
      if (swap === null) break;
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]]
      idx = swap
    }
  }

  isEmpty () {
    return this.heap.length === 0
  }
}

function mergeKSortedArrays (arrays) {
  const heap = new MinHeap()
  const result = []

  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      heap.push({ value: arrays[i][0], arrayIdx: i, elemIdx: 0 })
    }
  }

  while (!heap.isEmpty()) {
    const { value, arrayIdx, elemIdx } = heap.pop()
    result.push(value)
    if (elemIdx + 1 < arrays[arrayIdx].length) {
      heap.push({
        value: arrays[arrayIdx][elemIdx + 1],
        arrayIdx,
        elemIdx: elemIdx + 1
      })
    }
  }

  return result
}

// Example:
console.log(mergeKSortedArrays([[1, 4], [2, 5], [3, 6]]))
// Output: [1, 2, 3, 4, 5, 6]
