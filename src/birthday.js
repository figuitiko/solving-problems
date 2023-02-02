const birthday = (s, d, m) => {  
 
  let count=0;
  for (let i = 0; i < s.length; i++) {
    let newArr1 = [...s].splice(i, m);
   let sum1 = newArr1.reduce((a, b) => a + b, 0);
    if(sum1 === d){
      count++;
      continue;
    }
  }
  return count;

}

module.exports = birthday;