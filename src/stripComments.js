const stripComments = (input, markers) => {
  const lines = input.split('\n')
  console.log(lines)
  // Iterate through each line
  const strippedLines = lines.map(line => {
    // Check for comment markers in the line
    for (const marker of markers) {
      const index = line.indexOf(marker)
      if (index !== -1) {
        // Remove text after the comment marker
        line = line.substring(0, index)
      }
    }
    // Trim whitespace at the end of the line
    line = line.trim()
    return line
  })
  // Join the stripped lines back together with newline characters
  const strippedText = strippedLines.join('\n')
  return strippedText
}

// const stripComments1 = (input, markers) => {
//   const inputArr input.split()
// }

console.log(stripComments('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
