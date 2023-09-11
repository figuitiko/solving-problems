const biggerIsGreater = (w) => {
  // Write your code here
  const wordArray = w.split('')
  // Step 1: Find the index 'i' where word[i] < word[i+1]
  let i = wordArray.length - 2
  while (i >= 0 && wordArray[i] >= wordArray[i + 1]) {
    i--
  }

  // Step 2: If no such 'i' exists, return the original word
  if (i === -1) {
    return 'no answer'
  }

  // Step 3: Find the index 'j' where word[j] > word[i] and word[j] is the smallest character to the right of word[i]
  let j = wordArray.length - 1
  while (wordArray[j] <= wordArray[i]) {
    j--
  }

  // Step 4: Swap word[i] and word[j]
  [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]

  // Step 5: Sort the substring to the right of 'i' in ascending order
  const rightSubstring = wordArray.slice(i + 1).sort()

  // Combine the left part, swapped character, and sorted right part to form the next smallest word
  const result = [...wordArray.slice(0, i + 1), ...rightSubstring].join('')

  return result
}

// console.log(biggerIsGreater('bb'))
console.log(biggerIsGreater('hefg'))
