const findDigits = (n) => {
  let count = 0;
  const arrFromN = n.toString().split('').map(item=>Number(item));
  for(let item of arrFromN){
    if(n%item === 0){
      count++
    }
  }
  return count;
}
