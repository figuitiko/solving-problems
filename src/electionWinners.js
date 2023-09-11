const electionsWinners = (votes, k) => {
  const max = Math.max(...votes)
  const maxArr = votes.filter(item => item === max)
  const votesMax = votes.filter(item => (item + k) > max).length
  return votesMax === 0 ? maxArr.length > 1 ? 0 : maxArr.length : votesMax
}

// console.log(electionsWinners([2, 3, 4, 5], 3))
// console.log(electionsWinners([1, 3, 3, 1, 1], 0))
// console.log(electionsWinners([1, 1, 1, 1], 1))
console.log(electionsWinners([5, 1, 3, 4, 1], 0))
