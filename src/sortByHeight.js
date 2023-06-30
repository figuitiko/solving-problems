const solution = (a) => {
  let filteredSortedArr = a.filter(item => item !== -1).sort((a, b) => a - b)
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      const firstPart = filteredSortedArr.slice(0, i)
      const secondPart = filteredSortedArr.slice(i)
      filteredSortedArr = [...firstPart, a[i], ...secondPart]
    }
  }
  return filteredSortedArr
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
