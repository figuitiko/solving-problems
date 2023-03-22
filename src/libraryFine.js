const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  
  const deliveredDate = new Date(`${m1}-${d1}-${y1}`).getTime();
  const dueDate = new Date(`${m2}-${d2}-${y2}`).getTime();  
  if(deliveredDate <= dueDate){
    console.log('we got here');
    return 0;
  }
  if(y1 === y2 && m1 === m2 && d1> d2){
    return (d1-d2) * 15;
  }
  if(y1 === y2 && m1 > m2 ){
    return (m1 - m2) * 500;
  }
  if(y1 > y2){
    return 10000;
  }
  
};

console.log(libraryFine(12,12,2018, 5,12,2018));