countStatues =(statues) => {  
  const max = Math.max(...statues);
  const min = Math.min(...statues);
  const arrFromMax = [];
  let i = max;
  while (i >= min){    
    arrFromMax.push(i);
    i--;
  }
  ;  
  return arrFromMax.length -statues.length;
  
}

module.exports = countStatues;