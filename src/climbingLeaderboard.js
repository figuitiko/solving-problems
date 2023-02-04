const climbingLeaderboard = (ranked, player) => {
  const arrResult = []; 
   ranked = [...new Set(ranked)];
   ranked = ranked.sort((a, b)=> b-a);  
  for(let i = 0; i< player.length; i++ ){
    let position = i+1;
    for(let j = 0; j < ranked.length; j++){
      if(player[i] >= ranked[j] ){
        position = j+1;    
        break;
      }else{
        position = ranked.length+1;
      }      
    }
    arrResult.push(position);    
  }
  return arrResult;  
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));
//console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));