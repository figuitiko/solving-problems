/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

const appendAndDelete = (s, t, k) =>{  
  const lengthS = s.length;
  const lengthT = t.length;

  const smallerLength = Math.min(lengthS, lengthT);
  let idx = smallerLength;
  for(let i=0; i< smallerLength; i++){
    if(s[i] !== t[i]){
      idx =i;
      break;
    }    
  }
  const charactersNeeded = (lengthS + lengthT) -2 *idx;
  if(charactersNeeded === k) return 'Yes';
  if(charactersNeeded < k && (2*idx +charactersNeeded <= k)) return 'Yes';
  if(charactersNeeded <  k && (k-charactersNeeded)%2 === 0) return 'Yes';
  return 'No';
}
console.log(appendAndDelete('ashley', 'ash', 2));

//const charactersNeeded = (lengthS + lengthT) -2 *idx;

// Here, lengthS and lengthT are the lengths of strings s and t, respectively, and idx is the index where the two strings differ. The formula (lengthS + lengthT) - 2 * idx gives us the total number of characters that need to be deleted from string s and added to string t to transform s into t.

// Let's take an example to understand this better. Suppose s = "abcdefg" and t = "abxdefy". Then, the loop will compare the characters of s and t until index 2, where s[2] is c and t[2] is x. Since c and x are different, the loop breaks, and idx is set to 2.

// Therefore, the value of c would be (7 + 7) - 2 * 2, which is equal to 10. This means that s needs to have 4 characters deleted (the characters from index 2 to 6) and t needs to have 6 characters added (the characters x, d, e, f, y, and an additional character, since the length of t is greater than the length of s) to transform s into t.

// I hope that clears things up! Let me know if you have any further questions.