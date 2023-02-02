const getTotalX = (a, b) => {
  // Complete this function
  const maxA = Math.max(...a);
  const maxB = Math.max(...b);
  let itemsToCheck = [];
  let itemsInit = maxA;
  itemsToCheck = [...itemsToCheck, maxA];
  while (itemsInit < maxB) {
    itemsToCheck = [...itemsToCheck, itemsInit + 1];
    itemsInit++;
  }
  let resultsA = [];
  let resultsB = [];

  for (let item of itemsToCheck) {
    let checker = [];
    for (let itemA of a) {
      if (item % itemA === 0) {
        checker = [...checker, true];
      } else {
        checker = [...checker, false];
      }
    }
    if (checker.every((itemCheckA) => itemCheckA === true)) {
      resultsA = [...resultsA, item]
    }

    for (let itemB of b) {
      if (itemB % item === 0) {
        checker = [...checker, true];
      } else {
        checker = [...checker, false];
      }
    }
    if (checker.every((itemCheckB) => itemCheckB === true)) {
      resultsB = [...resultsB, item]
    }
  }
  resultsA = [...new Set(resultsA)];
  resultsB = [...new Set(resultsB)];

  let results = resultsA.filter(n => resultsB.indexOf(n) !== -1);

  return results.length;
}



module.exports = getTotalX