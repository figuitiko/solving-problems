const migratoryBirds = (arr)=>{

const counts = {};
  arr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
const bigger = Math.max(...Object.values(counts))

const values = Object.keys(counts).filter(item=> counts[item]=== bigger);

return Math.min(...values.map(val=>parseInt(val)));
}

module.exports = migratoryBirds;