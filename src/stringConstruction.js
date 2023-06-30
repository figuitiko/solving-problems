/*
 * Complete the 'stringConstruction' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

const stringConstruction = (s) => {
  // Write your code here
  let p = ''
  let cost = 0
  for (let i = 0; i < s.length; i++) {
    if ((p.includes(s[i]))) {
      p += s[i]
      continue
    }
    p += s[i]
    cost++
  }
  console.log(cost)
  return cost
}

// console.log(stringConstruction('abcd'))
console.log(stringConstruction('abab'))
