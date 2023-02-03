const catAndMouse = (x, y, z)=>{
  let distanceCat1 = x-z;
  let distanceCat2 = y-z;
  distanceCat1 = Math.abs(distanceCat1);
  distanceCat2 = Math.abs(distanceCat2);

  if(distanceCat1 < distanceCat2){
    return 'Cat A';
  }else if(distanceCat2 < distanceCat1){
    return 'Cat B';
  }else {
    return 'Mouse C';
  }
};

console.log(catAndMouse(1, 2, 3));