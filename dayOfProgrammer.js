const dayOfProgrammer = (year) => {
  
  let defaultMonthSum = 243; 
  
  if(year > 1918){
    
    if((year%400 === 0 )|| ((year%4 === 0) && (year%100 !== 0))){
     
      defaultMonthSum = defaultMonthSum+1;
      console.log(defaultMonthSum)
      return `${256-defaultMonthSum}.09.${year}`; 
    }
    return `${256-defaultMonthSum}.09.${year}`;  
  }
  if(year ===1918){
    defaultMonthSum = 230;
    return `${256-defaultMonthSum}.09.${year}`;
  }
  if(year < 1918){
    if(year%4 === 0){
      defaultMonthSum = defaultMonthSum+1;
      return `${256-defaultMonthSum}.09.${year}`;  
    }
  }

  return `${256-defaultMonthSum}.09.${year}`;  

}

module.exports = dayOfProgrammer;