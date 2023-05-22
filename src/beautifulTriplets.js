/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
  const mp = new Map();
  let result = 0;
  for (let a of arr) {
    mp.set(a, (mp.get(a) || 0) + 1);
    result += (mp.get(a - d) || 0) * (mp.get(a - 2 * d) || 0);
  }
  return result; 
}

// const checkIfBeautiful = (d, arr) => {
//   return (arr[2] -arr[1] === d) && (arr[1]- arr[0]===d)
// }
// console.log(beautifulTriplets(3, [1, 2, 4, 5,]))
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))
// console.log(checkIfBeautiful(3, [1, 4, 7]))