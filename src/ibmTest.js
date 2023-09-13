
/*
 * Complete the 'getMinimumMoves' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY quantity as parameter.
 */
/*
*the shopkeeper wants the counts in each consignment to be equal to achieve this , the shopkeeper can perform the following operation zero or more times increase
* or decrease the number of items in any consignment by 1 the quantity of items in a consignment cannot be negative find the minimum number of operations required to equalize the quantities in all the consignments
* it return entire number of moves
*/
const getMinimumMoves = (quantity) => {
  // Write your code here
  let moves = 0
  const sum = quantity.reduce((acc, curr) => acc + curr, 0)
  const average = sum / quantity.length
  if (average % 1 !== 0) return -1
  for (let i = 0; i < quantity.length; i++) {
    const difference = quantity[i] - average
    if (difference > 0) {
      moves += difference
    }
  }
  return moves
}
// get this results for the following arrays
console.log(getMinimumMoves([3, 3, 6, 3, 9])) // 0
console.log(getMinimumMoves([4, 5, 7])) // 2
