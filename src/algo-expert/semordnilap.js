const semordnilap = (words) => {
  const result = []
  const visited = new Set()

  for (let i = 0; i < words.length; i++) {
    const reverse = words[i].split('').reverse().join('')
    const restArr = words.slice(i + 1)
    const found = restArr.find(item => item === reverse)
    if (found && (!visited.has(words[i]) || !visited.has(found))) {
      result.push([words[i], found])
      visited.add(words[i])
      visited.add(found)
    }
  }
  return result
}

console.log(semordnilap(['diaper', 'abc', 'test', 'cba', 'repaid']))
console.log(semordnilap(['aaa', 'bbbb']))
