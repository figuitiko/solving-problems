const viralAdvertising = (n)=> {
  let shared = 5;
  let liked = Math.floor(shared/2);
  let cumulative = liked;
  for(let i = 1 ; i< n; i++){
    shared = Math.floor(shared/2)*3;
    liked = Math.floor(shared/2)
    cumulative = cumulative+liked;
    console.log('cumulative',cumulative )
  }
  return cumulative
}
console.log(viralAdvertising(3))