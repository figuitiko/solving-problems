function differByOneCharacter (inputArray) {
  // Helper function to check if two strings differ by exactly one character
  function differByOne (str1, str2) {
    let diffCount = 0
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        diffCount++
        if (diffCount > 1) return false
      }
    }
    return diffCount === 1
  }

  // Helper function for depth-first search
  function dfs (currentIndex, visited) {
    if (visited.size === inputArray.length) return true

    for (let i = 0; i < inputArray.length; i++) {
      if (!visited.has(i) && differByOne(inputArray[currentIndex], inputArray[i])) {
        visited.add(i)
        if (dfs(i, visited)) return true
        visited.delete(i)
      }
    }

    return false
  }

  // Main logic
  for (let i = 0; i < inputArray.length; i++) {
    const visited = new Set()
    visited.add(i)
    if (dfs(i, visited)) return true
  }

  return false
}

// Example usage:
const inputArray = ['abc', 'xbc', 'xxc', 'xbc']
console.log(differByOneCharacter(inputArray)) // Output: true
