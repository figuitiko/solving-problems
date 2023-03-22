/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

const nonDivisibleSubset = (k, s) => {
  const allPermutations = [];

  for (let i = 0; i < s.length; i++) {
    
    for (let j = 0; j < s.length; j++) {
      if (i !== j) {
        const result = (s[i] + s[j]);
        if (result % k !== 0) {
          allPermutations.push(s[i]);
          allPermutations.push(s[j]);
        }
      }
    }
    console.log(allPermutations)
    return [...new Set(allPermutations)].length;
  }
}

const nonDivisibleSubset1 =(k, s) =>{
  let answer = 0;
    let arr = new Array(k).fill(0);
    s.forEach(val => {
      const remainderVal = val%k;
        arr[remainderVal]++;
    })

    if (arr[0] > 0) answer++;
    for (let i = 1; i < k; i++) {
        if (arr[i] == 0) continue;
        if (i + i == k) answer++;
        else {
            answer += Math.max(arr[i], arr[k - i])
            arr[i] = 0;
            arr[k - i] = 0;
        }
    }
    return answer;
}

console.log(nonDivisibleSubset1(4, [19, 10, 12, 10, 24, 25, 22]));
//console.log(nonDivisibleSubset1(3, [1, 7, 2, 4]));
//console.log(nonDivisibleSubset1(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));