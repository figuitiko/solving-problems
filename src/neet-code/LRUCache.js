class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor (capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get (key) {
    if (this.cache.has(key)) {
      this.cache.set(key, { ...this.cache.get(key), used: new Date() })
      console.log(`value with key ${key} val:`, this.cache.get(key).value)
      return this.cache.get(key).value
    }
    console.log(`value with key ${key} val: -1`)
    return -1
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put (key, value) {
    if (this.cache.size < this.capacity) {
      this.cache.set(key, { value, used: new Date() })
    } else {
      console.log('lastRecentlyUsed', this.lastRecentlyUsed())
      this.cache.delete(this.lastRecentlyUsed())
      this.cache.set(key, { value, used: new Date() })
    }
    console.log('map', this.cache)
  }

  lastRecentlyUsed () {
    let recentlyUsed = null

    for (const [key, val] of this.cache.entries()) {
      const { used } = val
      if (!recentlyUsed) {
        recentlyUsed = { key, used }
      } else {
        const { used: recentlyUsedDate } = recentlyUsed
        if (recentlyUsedDate < used) {
          recentlyUsed = { key, used }
        }
      }
    }

    return recentlyUsed.key
  }
}

// const lruCache = new LRUCache(2)

// lruCache.put(2, 3)
// lruCache.put(4, 2)
// lruCache.get(4)
// lruCache.put(3, 4)
// lruCache.put(5, 4)
// console.log(lruCache.lastRecentlyUsed())

// ["LRUCache", [2], "put", [1, 1], "put", [2, 2], "get", [1], "put", [3, 3], "get", [2], "put", [4, 4], "get", [1], "get", [3], "get", [4]]

const newLruCache = new LRUCache(2)
newLruCache.put(1, 1)
newLruCache.put(2, 2)
newLruCache.get(1)
newLruCache.put(3, 3)
newLruCache.get(2)
newLruCache.put(4, 4)
newLruCache.get(1)
newLruCache.get(3)
newLruCache.get(4)

class LRUCache1 {
  /**
   * @param {number} capacity
   */
  constructor (capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get (key) {
    if (!this.cache.has(key)) return -1
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put (key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size === this.capacity) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
    this.cache.set(key, value)
  }
}
