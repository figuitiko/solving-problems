const centuryCalc = (year)=>{
  if(year<100)return 1;
  const rest = Math.floor(year/100);
  const remainder = year%100;
  if(remainder === 0){
    return rest;
  }
  return rest+1;  
}

console.log(centuryCalc(1700));
console.log(centuryCalc(1701));