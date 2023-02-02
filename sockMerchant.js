const sockMerchant  = (n ,ar)=>{
  let count =0;
  let set = new Set();
  for(let i =0; i< ar.length; i++){
    if(!set.has(ar[i])){
      set.add(ar[i])
    }else{
      count++;
      set.delete(ar[i])
    }
  }
  return count;
  
  
}

module.exports = sockMerchant;