/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

const  kaprekarNumbers =(p, q) => {
  // Write your code here
  let resultArr = [];
  for(let i = p; i<= q; i++ ){    
    if(checkIsKapreKar(i)){
      resultArr.push(i);
    }
  }
  if(resultArr.length){

    resultArr = resultArr.join(' ').toString();
    process.stdout.write(resultArr);
  }else{
    process.stdout.write('INVALID RANGE')
  }

  // return resultArr;

}

const checkIsKapreKar = (n) =>{
  let square = n*n;
  let digits = n.toString().length;
  let squareStrArr  = square.toString().split('');
  
  let arrMin = [];   
  do{
    arrMin = [...arrMin, squareStrArr.slice(-digits)]
    squareStrArr.splice(-digits)
  }while(squareStrArr.length)
  let arrRs =  arrMin.map(item=>item.join(''))  
  let valRs = arrRs.map(Number).reduce((a,b) => a+b);
   
   return n === valRs;
}
// console.log(checkIsKapreKar(45));
// console.log(checkIsKapreKar(10));
console.log(kaprekarNumbers(400, 700))
