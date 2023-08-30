// eslint-disable-next-line no-extend-native
Array.prototype.sameStructureAs = function (other) {
  if (!Array.isArray(other)) return false
  const customMap = (itemArr) => {
    return itemArr.map(item => {
      if (Array.isArray(item)) {
        return customMap(item)
      }
      return 1
    })
  }
  const mapThis = customMap(this)
  const mapOther = customMap(other)
  return JSON.stringify(mapThis) === JSON.stringify(mapOther)
}

// console.log([1, 1, 1].sameStructureAs([2, 2, 2])) // true
// console.log([1, [1, 1]].sameStructureAs([2, [2, 2]])) // true
console.log([1, [1, 1]].sameStructureAs([[2, 2], 2])) // false
