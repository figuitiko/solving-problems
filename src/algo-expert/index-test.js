// Write a function to test if two strings are anagrams.
// Definition of Anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Function output should be one of the strings "true" or "false"
// note the signature of the expected function
// run the function below test:
const IsAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  const map = {}
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in map) {
      map[str1[i]] = str1[i]++
    } else {
      map[str1[i]] = 1
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!map[str2[i]] || map[str2[i]] !== map[str1[i]]) {
      return false
    }
  }
  return true
}
function testAnagram () {
  console.log(IsAnagram('word', 'wrdo')) // returns "true"
  console.log(IsAnagram('mary', 'army')) // returns "true"
  console.log(IsAnagram('a', 'a')) // returns "true"
  console.log(IsAnagram('in', 'out')) // returns "false"
  console.log(IsAnagram('fill', 'fil')) // returns "false"
  console.log(IsAnagram('madd', 'maad')) // returns “false”
  console.log(IsAnagram('pet', 'pets')) // returns "false"
  console.log(IsAnagram('aba', 'bab')) // returns "false”
}
console.log(testAnagram())

const reverseStr = (str) => {
  const stack = []
  for (let i = 0; i < str.length; i++) {
    stack.unshift(str[i])
  }
  return stack.join('')
}
