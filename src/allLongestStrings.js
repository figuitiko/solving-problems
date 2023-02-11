const allLongestStrings = (inputArray) =>{

  let maxArr = [];
  let maxVal = 0;
  for(let val of inputArray){
      if(val.length > maxVal){
        maxVal = val.length;
      }
  }
  for(let val of inputArray){
    if(val.length === maxVal){
      maxArr.push(val);
    }
  }
  return maxArr;
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));