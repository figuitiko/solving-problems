/*
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

const happyLadybugs = (b)=> {

  let map = new Map();
  let underscore = 0;

  for (let i = 0; i < b.length; i++) {
    if (b[i] === "_") {
      underscore++;
    } else {
      if (map.has(b[i])) {
        map.set(b[i], map.get(b[i]) + 1);
      } else {
        map.set(b[i], 1);
      }
    }
  }

  if (underscore === b.length) return "YES";
  if (underscore === 0) {
    for (let i = 0; i < b.length; i++) {
      if (b[i] !== b[i + 1] && b[i] !== b[i - 1]) return "NO";
    }
    return "YES";
  }

  for (let [key, value] of map) {
    if (value === 1) return "NO";
  }

  return "YES";

}

console.log(happyLadybugs("RBY_YBR"));