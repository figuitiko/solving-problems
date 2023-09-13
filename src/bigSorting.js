const fs = require('fs')

const filePath = './bigSorting.txt'
let data = []
try {
  data = fs.readFileSync(filePath, 'utf8')
  data = data.split('\n').map(item => item.slice(0, -2))
  // console.log('File contents:', data)
} catch (err) {
  console.error('Error reading file:', err)
}

/*
 * Complete the 'bigSorting' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY unsorted as parameter.
 */
// const bigSorting = (unsorted) => {

// }

// // console.log(bigSorting(['1', '200', '150', '200']))
// console.log(bigSorting(['6', '31415926535897932384626433832795', '1', '3', '10', '3', '5']))
// console.log(bigSorting(data))

function customComparator (a, b) {
  if (a.length !== b.length) {
    return a.length - b.length
  }
  return a.localeCompare(b) // Assumes strings need to be sorted in lexicographical order
}

function bigSort (arr) {
  arr.sort(customComparator)
  return arr
}

console.log(bigSort(['6', '31415926535897932384626433832795', '1', '3', '10', '3', '5'])) // Output: [2, 3, 4, 5, 8]
