const canSumTab = (targetSum, numbers) =>{
  const table = Array(targetSum +1).fill(false);
  table[0] = true;
  for(let i=0; i<= targetSum; i++){
    if(table[i] === true){
      for(let num of numbers){
        table[i+num] = true;
      }
    }
  }
  return table[targetSum];
}
const canSumMemo = (targetSum, numbers, memo={}) =>{
  if(targetSum in memo) return memo[targetSum];
  if(targetSum === 0) return true;
  if(targetSum < 0) return false;
  for(let num of numbers){
    const remainder = targetSum - num;
    if(canSumMemo(remainder, numbers, memo) === true){
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}
console.log(canSumMemo(10, [5,4,3]));
console.log(canSumTab(10, [5,4,3]));
console.log(canSumTab(7, [4,2,8]));