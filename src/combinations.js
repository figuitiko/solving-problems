const combinations = (elements) => {
  if (elements.length === 0) return [[]]
  const firstEl = elements[0]
  const rest = elements.slice(1)

  const combsWithoutFirst = combinations(rest)
  const combsWithFirst = []

  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, firstEl]
    combsWithFirst.push(combWithFirst)
  })

  return [...combsWithoutFirst, ...combsWithFirst]
}

// console.log(combinations(['a', 'b', 'c']))

const permutations = (elements) => {
  if (elements.length === 0) return [[]]
  const firstEl = elements[0]
  const rest = elements.slice(1)
  const permsWithoutFirst = permutations(rest)
  const allPermutations = []
  permsWithoutFirst.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)]
      allPermutations.push(permWithFirst)
    }
  })
  return allPermutations
}

// console.log(permutations(['a', 'b', 'c']))
// console.log(permutations([0, 2, 2, 3]))
// console.log(permutations([7, 4, 9, 6]))
console.log(permutations([1, 2, 3]))
// console.log(combinations([7, 4, 1]))
// console.log(permutations([7, 4, 3]))

// const myPermutations =