const cache = {};
const sumRecursiveMemo = (arr) =>{
  console.log(cache);
  let termArrKey = JSON.stringify(arr);  
  if(termArrKey in cache) return cache[termArrKey];   
  if(arr.length===1) return arr[0];  
  const rest = arr.slice(1);    
   cache[termArrKey] = arr[0] + sumRecursiveMemo(rest);   
  return cache[termArrKey];
}

const sumRecursive = (arr) => {
  if(arr.length===1) return arr[0];
  const rest = arr.slice(1);
  return arr[0]+ sumRecursiveMemo(rest);

}

// console.log(sumRecursiveMemo([4]));
console.time('sumMemo')
console.log(sumRecursiveMemo([4,6,2, 9 ,5,6,4,2,5,7,8,9]));
console.timeEnd('sumMemo')

console.time('sumNoMemo');
console.log(sumRecursive([4,6,2, 9 ,5,6,4,2,5,7,8,9]));
console.timeEnd('sumNoMemo');

// console.log(sumRecursiveMemo([9,4,1]));
// console.log(sumRecursiveMemo([8,3,12]));