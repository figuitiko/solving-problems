const bonAppetit = (bill, k, b)=>{
  bill.splice(k, 1);
  let total= bill.reduce((a,b)=>a+b);
  if(total/2 === b){
    process.stdout.write("Bon Appetit");    
  }else{
    let  result = total/2 -b;
    result = Math.abs(result);
    result = result.toString();    
    process.stdout.write(result);
  }
 
}

module.exports = bonAppetit;