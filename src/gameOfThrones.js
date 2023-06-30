/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// const gameOfThrones = (s) => {
//   const sArr = s.split('')
//    const firstHalf = sArr.slice(0, Math.floor(s.length/2))
//    console.log({firstHalf})
// }
// // const permutations = (elements) => {
// //   if (elements.length === 0) return [[]]
// //   const firstEl = elements[0]
// //   const rest = elements.slice(1)
// //   const permsWithoutFirst = permutations(rest)
// //   const allPermutations = []
// //   permsWithoutFirst.forEach(perm => {
// //     for (let i = 0; i <= perm.length; i++) {
// //       const permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)]
// //       allPermutations.push(permWithFirst)
// //     }
// //   })
// //   return allPermutations
// // }

// const isPalindrome = (s) => {
//   if (s === '') return true
//   let lastIdx = s.length - 1
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== s[lastIdx]) {
//       return false
//     }
//     lastIdx--
//   }
//   return true
// }
// // console.log(isPalindrome('abab'))
// console.log(gameOfThrones('cdcdcdcdeeeef'))
// // const arrFromString = 'aabbccdd'.split('')
// // console.log(permutations(arrFromString))

function gameOfThrones1 (s) {
  const counter = new Map()
  let oddCount = 0

  for (let i = 0; i < s.length; i++) {
    if (counter.has(s[i])) {
      counter.set(s[i], counter.get(s[i]) + 1)
    } else {
      counter.set(s[i], 1)
    }
  }

  for (const count of counter.values()) {
    if (count % 2 !== 0) {
      oddCount++
    }
  }

  if (oddCount <= 1) {
    return 'YES'
  } else {
    return 'NO'
  }
}

console.log(gameOfThrones1('aabccbdd')) // Output: YES
console.log(gameOfThrones1('aabbccdd')) // Output: NO
