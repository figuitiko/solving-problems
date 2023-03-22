const jumpingOnClouds =(c) => {
  let i = 0;
  let arrPaths = [];  
  do{
    if(c[i]!== 1 && c[i+2] !== 1){
      arrPaths = [...arrPaths, i];      
      i+=2;
    }else if(c[i]!==1 && c[i+1] !== 1){
      arrPaths = [...arrPaths, i];      
      i++
    }else{
      return 0;
    }    
  }while(i<=c.length);  
  return arrPaths.length-1;  
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));