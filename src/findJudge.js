const findJudge = (N, trust) => {
  
  if (N === 1) return 1;
  
  const trustMap = new Map();
  const trustedMap = new Map();
  
  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i];
    trustMap.set(a, true);
    trustedMap.set(b, (trustedMap.get(b) || 0) + 1);
  }
  
  for (let i = 1; i <= N; i++) {
    if (!trustMap.has(i) && trustedMap.get(i) === N - 1) return i;
  }
  
  return 0;
};

console.log(findJudge(2, [[1,2]]));