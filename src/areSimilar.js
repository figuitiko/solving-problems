const areSimilar = (a, b) => {
  if (checkIfAreEqual(a, b)) return true
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      const tempB = [...b]
      ;[tempB[i], tempB[j]] = [tempB[j], tempB[i]]
      if (checkIfAreEqual(a, tempB)) {
        return true
      }
    }
  }
  return false
}

const checkIfAreEqual = (a, b) => {
  if (JSON.stringify(a) === JSON.stringify(b)) return true
  return false
}

console.log(areSimilar([1, 2, 3], [2, 1, 3]))

const solution = (a, b) => {
  if (a.length !== b.length) {
    return false
  }

  if (a.join('') === b.join('')) {
    return true
  }

  const diff = []

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff.push(i)
    }
  }

  if (diff.length > 2) {
    return false
  }

  if (diff.length === 0) {
    return true
  }

  if (diff.length === 1) {
    const [index] = diff
    return a[index] === b[index]
  }

  if (diff.length === 2) {
    const [index1, index2] = diff
    return a[index1] === b[index2] && a[index2] === b[index1]
  }

  return false
}
