const arr = [1, 1, 2]

// let result = arr.reduce((acc, current, index) => {
//   // console.log(acc, current , index);
//   if (index >= 0 && arr[index+1] < current) {

//     return acc;
//   }
//   return current;
// }, arr[0]) >= arr[arr.length - 1];

// console.log(result); // Output: false

const checkSorted = (arr) => {
  let i = 0
  while (i < arr.length - 1) {
    if (arr[i + 1] <= arr[i]) {
      return false
    }
    i++
  }
  return true
}

console.log(checkSorted(arr))
// const subtraction =  arr.reduceRight((acc,current, index)=> {
//   if(index < arr.length-1){
//     const subtraction = acc-current;
//     return subtraction;
//   }
//   return current;
// }, arr[arr.length-1]) > 0

// console.log('subtraction', subtraction);
