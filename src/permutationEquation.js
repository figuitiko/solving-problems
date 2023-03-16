const permutationEquation = (p) => {
  const setValues = new Set(p);
  const arrResult = [];
  for (let i = 1; i <= p.length; i++) {
    if (setValues.has(i)) {
      const idx = p.findIndex((item) => item === i);
      const xVal = idx + 1;
      const idxY = p.findIndex(item => item === xVal);
      const yVal = idxY + 1
      arrResult.push(yVal);
    }
  }
  return arrResult;
}
console.log(permutationEquation([2, 3, 1]));