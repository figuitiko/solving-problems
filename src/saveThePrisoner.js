const saveThePrisoner = (n, m, s) =>{
    
  let currentVal = 1;
  for(let i = 1; i <= m; i++){
    if(i==1){
      currentVal = s;
    }else if(currentVal < n ){
    currentVal++;
   }else{
    currentVal =1;
   }    
  }
  return currentVal;
}
const saveThePrisoner1 = (n, m, s) => {
  const skippedPrisoners = (m - 1) % n;
  const finalPrisoner = (skippedPrisoners + s) % n;
  return finalPrisoner === 0 ? n : finalPrisoner;
};

console.log(saveThePrisoner1(4, 6, 2));
console.log(saveThePrisoner1(1, 1, 1));
console.log(saveThePrisoner1(7, 19, 2));
console.log(saveThePrisoner1(3, 7, 3));
console.log(saveThePrisoner1(530, 533048047, 529));
console.log(saveThePrisoner1(999999999, 999999998, 999983945));
console.log(saveThePrisoner1(59, 78693934, 2));