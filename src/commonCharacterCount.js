const commonCharacterCount = (s1, s2) => {
  let s1Arr = getArrayString(s1);
  const s2Arr = getArrayString(s2);  
  let arrResult = []; 

  for (let i = 0; i < s1Arr.length; i++) {
    if(s2.includes(s1Arr[i])){      
      arrResult.push(s1Arr[i]);
    }
  }
  for (let j = 0; j < s2Arr.length; j++){
    if(s1.includes(s2Arr[j])){      
      arrResult.push(s2Arr[j])
    }
  }
  
  arrResult = [...new Set(arrResult)];
  console.log(arrResult.length);
  return arrResult.length; 
}

const getArrayString = (string) =>{
  const strArr = [];
  for(let i = 0; i< string.length; i++){
    if(strArr.length === 0){
      strArr.push(string[i]);
    }else if(strArr.at(-1).includes(string[i]) ){
      let tempString = strArr.at(-1) + string[i]
      strArr.pop();
      strArr.push(tempString);
    }else{
      strArr.push(string[i]);
    }
  }
  return strArr;
}

commonCharacterCount('aabcc', 'adcaa');