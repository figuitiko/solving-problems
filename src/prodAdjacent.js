const prodAdjacent =(inputArray) =>{
  let i = 0;
  let max = inputArray[0];
  while(i< inputArray.length -1){
    const prod = inputArray[i]*inputArray[i+1];
    if(prod>max || i === 0){
      max = prod;
    } 
    i++; 
  }
  return max;
  
}

console.log(prodAdjacent([1, 0, 1, 0, 1000]));