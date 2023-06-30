/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

const camelcase = (s) => {
  let caps = 0
  for (let i = 0; i < s.length; i++) {
    if (checkIfUpperCase(s[i])) {
      caps++
    }
  }
  return caps + 1
}

const checkIfUpperCase = (c) => {
  return c.toUpperCase() === c && c.toLowerCase() !== c
}

console.log(camelcase('crackTotalNow'))
