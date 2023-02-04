const fizzBuzz = (n) => {
  const allValues = [];
  for (let i = 1; i <= n; i += 1) {
    allValues.push(i);
  }
 
  for(let val of allValues){
    if (val % 3 === 0 && val % 5 === 0) {
      process.stdout.write('FizzBuzz' +'\n');
    } else if (val % 3 === 0) {
      process.stdout.write('Fizz'+ '\n');      
    } else if (val % 5 === 0) {      
      process.stdout.write('Buzz' + '\n');      
    } else {
      process.stdout.write(val.toString()+ '\n');      
    }
  };  
};
