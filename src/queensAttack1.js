const queensAttack1 = (  n, k, r_q, c_q, obstacles ) => {
 
    const array = {};
    
    for (let i = 1; i <= n; i++) {
    array[i] = {};
    for (let j = 1; j <= n; j++) {
      array[i][j] = 0;
    }
    }
    array[r_q][c_q] = 1;
    if(k !==0){
      for(let obstacle of  obstacles){
      array[obstacle[0]][obstacle[1]] = 2;
      }
    }
    
    console.table(array)
    console.log(array)
    return getTheMov(r_q, c_q, n, array);

    }
  const getTheMov = (x,y, limit, array)=>{
    let diagMov = 0;
    let horizontalMov =0;

    for(let i=1; i <= limit; i++){
      for(let j=1; j<= limit; j++){
        const diffX = Math.abs(x-i);
        const diffY = Math.abs(y-j);
        if(array[i][j] !== array[x][y] && array[i][j] ===0 && diffX == diffY){
          diagMov++
        }
        
        if(array[i][j] !== array[x][y] && array[i][j] ===0 && (i== x  )){
          const arrX = array[i]
          console.log({arrX});
         horizontalMov++
        }
        if(array[i][j] !== array[x][y] && array[i][j] ===0 && (j== y  )){
          const positionGetIt = array[i][j];
          const positionGiven = array[x][j];
          const startPos = i <  x ? i: x;
          const endPos = i < x ? x: i;
          for(let k = startPos; k <= endPos ; k++ ){

          }
          // console.log({arrY});
          horizontalMov++
        }
      }
    }  
      return diagMov + horizontalMov;
} 



console.log(queensAttack(5,3,4,3,[[5,5], [4,2], [2,3]]));
// console.log(queensAttack(4,0,4,4));


