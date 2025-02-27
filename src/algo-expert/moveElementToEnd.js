const moveElementToEnd = (array, toMove) => {
  array = array.reduce((acc, curr) => {
    if (curr === toMove) {
      acc.push(curr)
    } else {
      acc.unshift(curr)
    }
    return acc
  }, [])
  return array
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 2, 3, 4, 2], 2))

const moveElementToEnd1 = (array, toMove) => {
  let pointerA = 0
  let pointerB = array.length - 1
  while (pointerB > pointerA) {
    if (array[pointerB] === toMove) {
      pointerB--
      continue
    }
    if (array[pointerA] === toMove) {
      [array[pointerA], array[pointerB]] = [array[pointerB], array[pointerA]]
    }

    pointerA++
  }
  return array
}

console.log(moveElementToEnd1([2, 4, 2, 5, 6, 2, 2], 2))

const moveElementToEnd2 = (array, toMove) => {
  let pointerA = 0
  let pointerB = array.length - 1
  while (pointerA < pointerB) {
    while (array[pointerB] === toMove && pointerA < pointerB) {
      pointerB--
    }
    if (array[pointerA] === toMove) {
      [array[pointerA], array[pointerB]] = [array[pointerB], array[pointerA]]
    }
    pointerA++
  }
  return array
}
console.log(moveElementToEnd2([3, 3, 3, 3, 3], 3))
