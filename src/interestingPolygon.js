const interestingPolygon = (n) => {
  if(n ===1) return 1;
  return n + interestingPolygon(n-1)
}

console.log(interestingPolygon(3));