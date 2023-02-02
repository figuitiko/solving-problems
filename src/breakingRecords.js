const breakingRecords = (scores) => {

  let highest = scores[0];
  let countHighest = 0;
  let lowest = scores[0];
  let countLowest = 0;

  for (let item of scores) {
    if (item > highest) {
      highest = item;
      countHighest++;
    }
    if (item < lowest) {
      lowest = item;
      countLowest++
    }
  }
  return [countHighest, countLowest];

}

module.exports = breakingRecords;